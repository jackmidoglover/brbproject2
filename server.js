//  variables that hold the required packages
// handlebars is used to control what end users see 
const express = require ('express');
const exphbs = require ('express-handlebars');
// body-parsing middleware;
const bodyParser = require ('body-parser');

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const PORT =3000;
app.listen(PORT);
return console.log ("I hear you barkin dawg " + PORT);

app.get('/', function(req,res){
    res.render('index');

});