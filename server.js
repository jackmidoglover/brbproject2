
const express = require('express');
const exphbs = require('express-handlebars');
// body-parsing middleware;
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require("./models");
const pg = require('pg');

// Allows html post requests
const methodOverride = require('method-override');

// Authorization packages
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const config = require('./config/config.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// app.use(express.static('views'));
app.use(cookieParser());
app.use(session({
    secret: 'iou8sadjh7453alk',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }));
app.use(passport.initialize());
app.use(passport.session());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
const authroutes = require('./controllers/passport_controllers.js');
const routes = require('./controllers/brb_controllers.js');

const PORT = 8080;

app.use(authroutes);
app.use(routes);
app.use(methodOverride('_method'));


// Routes
// =============================================================

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("I hear you barkin dawg", PORT)
    });
});



// Syntx to connect to Postgresql server
// CONNECT TO connection_target [ AS connection_name ] [ USER connection_user ]
// CONNECT TO DEFAULT
// CONNECT connection_user
// DATABASE connection_target

