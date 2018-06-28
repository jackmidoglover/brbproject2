
// stolen bike search variables
var bikePlace = [];
var bikeTime = [];
var stolenCoords = [];
var StolenBikeChosen;
var userSearch = {
    lat: '',
    lng: ''
  }

console.log('js is loading')

function handleClientLoad() {
  // Load the API's client and auth2 modules.
  // Call the initClient function after the modules load.
  gapi.load('client:auth2', initClient);
}

//Function that initializes map on document load
function initMap() {
    var uluru = { lat: 42.0166702, lng: 23.1000004 };
    var map = new google.maps.Map(document.querySelector(".search-field"), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  



// Map Search Function
function locationSearch(event) {
  event.preventDefault();

  console.log("working");
  var address = $("#bike-search").val().trim();
  $.ajax({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyBG8dPTg52rH0rTtwIR6a-Bl1DWiELwY1M",
    method: 'GET',
  }).done(function (response) {
    userSearch.lat = response.results[0].geometry.location.lat;
    userSearch.lng = response.results[0].geometry.location.lng;
    reInitMap();

    $.ajax({
      type: 'GET',
      url: 'https://whispering-plateau-60863.herokuapp.com/api/v3/search?page=1&per_page=25&location=' + userSearch.lat + ',' + userSearch.lng + '&distance=10&stolenness=proximity',
      dataType: 'json',
      cache: false,
    }).done(function (data) {
      for (i = 0; i < data.bikes.length; i++) {
        var place = data.bikes[i].stolen_location;
        var time = data.bikes[i].date_stolen;
        bikePlace.push(place);
        bikeTime.push(time);
      }
      stolenMarkers();
    })
  });


  $("#bike-search").val(" ");
}

//Function that returns latitude and longitude for items in bikePlace array

function stolenMarkers() {
  var stolenBikeLocationRequests = [];
  for (i = 0; i < bikePlace.length; i++) {
    if (!bikePlace[i]) {

    }
    else {
      var location = bikePlace[i];
      console.log(location);
      var stolenBikeLocation = $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=AIzaSyBG8dPTg52rH0rTtwIR6a-Bl1DWiELwY1M",
        method: 'GET',
      }).done(function (response) {
        var stolenLatLng = {
          lat: response.results[0].geometry.location.lat,
          lng: response.results[0].geometry.location.lng
        }


        stolenCoords.push(stolenLatLng);
      });

      stolenBikeLocationRequests.push(stolenBikeLocation);
    }
  }

  Promise.all(stolenBikeLocationRequests)
    .then(function () {
      reInitMap();
    })
  console.log(stolenCoords);
}

// Function that moves the map's centered point
function reInitMap() {
  var searchArea = userSearch;
  var map = new google.maps.Map(document.querySelector(".search-field"), {
    zoom: 10,
    center: searchArea
  });
  for (i = 0; i < stolenCoords.length; i++) {
    var marker = new google.maps.Marker({
      position: stolenCoords[i],
      map: map
    });
  }
}


$("#search").on("click", locationSearch);