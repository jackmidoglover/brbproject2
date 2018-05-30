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

router.post('/api/bikes/:id', (req, res) => {
    let condition = "id = " + req.params.id;
    console.log("condition ", condition);
    bike.updateOne({
        added: req.body.added
    }, condition, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.redirect("/");
            res.status(200).end();
          }
    });
});

module.exports = router;