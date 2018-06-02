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


router.post('/api/bikes', (req, res) => {
   
});

router.post('/api/bikes/:id', (req, res) => {
   
});


router.get('/swag', (req, res) => {
    res.render("swag");
   
});

router.get('/team', (req, res) => {
    res.render("team");
});


router.get('/addbike', (req, res) => {
    res.render("addbike");
});

router.get('/mybikes', (req, res) => {
    res.render("mybikes");
});

router.get('/login', (req, res) => {

    res.render("login");
   
});


module.exports = router;