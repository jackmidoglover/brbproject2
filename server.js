
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8000;

const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(express.static("public"));


const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var authroutes = require('./controllers/passport_controllers.js');

app.use(authroutes);
app.listen(PORT, function(){
    console.log ("I hear you barkin dawg " + PORT);
    
});



// Syntx to connect to Postgresql server
// CONNECT TO connection_target [ AS connection_name ] [ USER connection_user ]
// CONNECT TO DEFAULT
// CONNECT connection_user
// DATABASE connection_target

