var db = require("../models");
var passport = require("../config/passport");
const express = require('express');
const router = express.Router();
let loginStatus = {
    loggedIn: false,
    loggedOut: true
}

router.get("/", (req, res) => {
    if(req.isAuthenticated()){
        console.log('we got you');
        loginStatus.loggedIn = true;
        loginStatus.loggedOut = false;
        res.render("home", loginStatus);
    }
    else {
        console.log('nuh uh');
        loginStatus.loggedIn = false;
        loginStatus.loggedOut = true;
        res.render("home", loginStatus);
    }
    });


module.exports = router;