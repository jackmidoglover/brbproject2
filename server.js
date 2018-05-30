
const express = require('express');
const exphbs = require('express-handlebars');
// body-parsing middleware;
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require("./models");
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
var authroutes = require('./controllers/passport_controllers.js');


const PORT = 8080;

app.use(authroutes);
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

