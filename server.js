
const express = require ('express');
const exphbs = require ('express-handlebars');
// body-parsing middleware;
const bodyParser = require ('body-parser');
const path = require ('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const PORT =3000;
app.listen(PORT);
return console.log ("I hear you barkin dawg " + PORT);

var routes = require('./controllers');

app.use(routes);

// Syntx to connect to Postgresql server
// CONNECT TO connection_target [ AS connection_name ] [ USER connection_user ]
// CONNECT TO DEFAULT
// CONNECT connection_user
// DATABASE connection_target

