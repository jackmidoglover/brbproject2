
const express = require('express');
const exphbs = require('express-handlebars');
// body-parsing middleware;
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

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

app.use(routes);

// Syntx to connect to Postgresql server
// CONNECT TO connection_target [ AS connection_name ] [ USER connection_user ]
// CONNECT TO DEFAULT
// CONNECT connection_user
// DATABASE connection_target

