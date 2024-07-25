const express = require('express');
const router = express.Router();
module.exports = router;
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    location: {
        type: String
    }
});

const Location = mongoose.model('Location', locationSchema);

// get all locations
// http://localhost:4444/job/location/getlocations
router.get("/getlocations", async(req, res) => {
    try {
        const location = await Location.find();
        res.json(location);
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
});

// Add new location
// http://localhost:4444/job/location/addlocation
router.post("/addlocation", async(req, res) => {
    try {
        // const location = req.body;
        // if(!location){
        //     res.status(400).json({
        //         success:false,
        //         message:"Location is required"
        //     })
        // }

        const location = new Location({
            location: req.body.location
        });
        const newLocation = await location.save();
        res.json(newLocation);

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        }); 
    }
})