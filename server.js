
const express = require('express');
<<<<<<< HEAD
const bodyParser = require('body-parser');
const PORT = 8000;

=======
const exphbs = require('express-handlebars');
// body-parsing middleware;
const bodyParser = require('body-parser');
>>>>>>> b655b87c12be2a7a13a4b583315a681f20d5ff86
const path = require('path');
const app = express();
const db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
<<<<<<< HEAD


const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
=======
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
>>>>>>> b655b87c12be2a7a13a4b583315a681f20d5ff86
app.set('view engine', 'handlebars');
var authroutes = require('./controllers/passport_controllers.js');

<<<<<<< HEAD
app.use(authroutes);
app.listen(PORT, function(){
    console.log ("I hear you barkin dawg " + PORT);
    
});

=======
const PORT = 3000;
app.listen(PORT);
return console.log("I hear you barkin dawg " + PORT);

// Routes
// =============================================================


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
    });
});
var routes = require('./controllers');
>>>>>>> b655b87c12be2a7a13a4b583315a681f20d5ff86


// Syntx to connect to Postgresql server
// CONNECT TO connection_target [ AS connection_name ] [ USER connection_user ]
// CONNECT TO DEFAULT
// CONNECT connection_user
// DATABASE connection_target

