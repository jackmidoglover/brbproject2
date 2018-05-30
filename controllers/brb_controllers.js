const bike = require('../models/bikes');
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    bike.selectAll(function(data){
        let hndlBarsObj = {
           bike: data 
        }
        console.log(hndlBarsObj);
        return res.render("index", hndlBarsObj);
    });
});

router.post('/api/bikes', (req, res) => {
    burger.insertOne(['bike'], [
        req.body.bike
    ], function(result){
        res.redirect("/");
    });
});

module.exports = router;