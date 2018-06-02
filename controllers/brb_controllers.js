var db = require("../models");
var passport = require("../config/passport");
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
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