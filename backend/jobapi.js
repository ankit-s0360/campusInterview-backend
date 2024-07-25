const express = require("express");
const router = express.Router();
module.exports = router;

const Job = require("./jobschema.js");

// http://localhost:4444/jobs
router.get("/", async(req, res) => {
    let joblist = await Job.find();
    res.status(200).json(joblist);
})

// http://localhost:4444/jobs/jobpost
router.post("/jobpost", async(req, res) => {
    
    try {
        const {company, title, salary, location, description, jobType, postedOn} = req.body;

        if(!company ||!title || !salary || !location || !description || !jobType){
            res.status(400).json({
                success:false,
                message:"Every field is required"
            })
        }

        let newJob = new Job({
            company,
            title,
            salary,
            location,
            description,
            jobType,
            postedOn
        })

        await newJob.save();
        res.status(200).json({
            success:true,
            message:"New Job Posted Successfully",
            newJob
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
})

