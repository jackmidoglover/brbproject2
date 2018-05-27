const db = require('../models');

module.exports = function(app){
    app.get("/signup", function(req,res){
        return res.render("signup");
    })
}