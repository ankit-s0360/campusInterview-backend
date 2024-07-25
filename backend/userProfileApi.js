const express = require('express');
const router = express.Router();
module.exports = router;

const UserProfile = require('./userprofileSchema.js');

// get all user profiles
// http://localhost:4444/userprofile/profiles
router.get("/profiles", async(req, res) => {
    try {
        const profiles = await UserProfile.find();
        if(!profiles){
            res.status(400).json({
                success:false,
                message:"Profile does not exist"
            })
        }else{
            res.status(201).json(profiles);
        }

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }    
});

// create a new profile
// http://localhost:4444/userprofile/profile
router.post("/profile", async(req, res) => {    
    try {
        const userData = req.body;
        const profile = new UserProfile(userData);
        const usrProfile = await profile.save();
        res.status(201).json(usrProfile);

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
});

// get a specific profile
router.get("/profiles/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const profile = await UserProfile.findOne({adminId: id});
        if(!profile){
            res.status(400).json({
                success:false,
                message:"Profile does not exist"
            })
        }else{
            res.status(201).json(profile);
        }

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }    
});

// create a new profile
router.put("/profiles/:id", async(req, res) => {
    try {
        const userData = req.body;
        const profile = await UserProfile.findByIdAndUpdate(userData);
        const usrProfile = await profile.save();
        res.json(201).json(usrProfile);

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
});