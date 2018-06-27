var db = require("../models");
var passport = require("../config/passport");
const express = require('express');
const router = express.Router();
let loginStatus = {
    loggedIn: false,
    loggedOut: true,
    stolen: {}
}
let bikeID;

router.get("/", (req, res) => {
    console.log(req.user);
    db.Bikes.findAll({
        where: {
            Stolenness: true
        }
    }).then((data) => {
        if(req.isAuthenticated()){
            console.log('we got you');
            loginStatus.loggedIn = true;
            loginStatus.loggedOut = false;
            loginStatus.stolen = data;
            res.render("home", loginStatus);
        }
        else {
            console.log('nuh uh');
            loginStatus.loggedIn = false;
            loginStatus.loggedOut = true;
            res.render("home", loginStatus);
        }
    
    })
    });


//create bike
router.post('/api/bikes', (req, res) => {
    console.log(req.user);
    db.Bikes.create({
        Make: req.body.make,
        Model: req.body.model,
        Color: req.body.color,
        SerialNumber: req.body.serial,
        ImageURL: req.body.picture,
        UserId: req.user.id
    })
        .then(bikes => res.redirect("/"))
})


//mark bike stolen

router.get("/stolen/:id?", (req, res) => {
    console.log(req.params.id);
    bikeID = req.params.id;
    res.render("stolen");
})
router.post('/stolen/:id?', (req, res) => {

    console.log(bikeID);
    db.Bikes.update({
        Stolenness: true,
        DateStolen: req.body.date,
        LocationStolen: req.body.location,
        TimeStolen: req.body.time,
        Reward: req.body.reward,
        Comments: req.body.comments

    }, {
        where: {
            id: bikeID
        }
    })
        .then(() => {
            console.log("processed");
        res.render("stolen", {message: "Bike reported stolen."})
        })
})



//find bike belonging to user
router.get('/mybikes/:id?', (req, res) => {
    console.log(req.user);
    
    db.Bikes.findAll ({
        where: {
            UserId: req.user.id   
        }
    }).then((data) => {
        let hbsinfo = {
            bikes: data
        };
        
        console.log(hbsinfo);
        res.render("mybikes",hbsinfo)

})
})

//delete bike
router.get("/api/bikes/delete/:id?", (req, res) => {
    console.log(req.params.id);
    console.log("delete hit");
    const bikeDelete = req.params.id;
    db.Bikes.destroy({
        where: {
            id: bikeDelete
        }
    }).then(bikes => res.redirect("/"))
})




router.get('/swag', (req, res) => {
    res.render("swag");
   
});

router.get('/team', (req, res) => {
    res.render("team");
});


router.get('/addbike', (req, res) => {
    console.log(req.body);
    res.render("addbike");
});

router.get('/mybikes', (req, res) => {
    console.log(req.body);
    res.render("mybikes");
});

router.get('/login', (req, res) => {

    res.render("login");
   
});


module.exports = router;
