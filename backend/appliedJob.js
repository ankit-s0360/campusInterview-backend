const express = require("express");
const router = express.Router();
module.exports = router;

const AppliedJob = require("./appliedJobschema.js");

router.post("/apply-for-job", async(req, res) => {

    try {
        const {jobId, adminId, appliedAt} = req.body;

        if(!jobId || !adminId){
            res.status(400).json({
                success:false,
                message:"JobId and AdminId are required"
            })
        }

        // Check if the admin has already applied for this job
        const existingApplication = await AppliedJob.findOne({jobId, adminId});

        if(existingApplication){
            res.status(400).json({
                success:false,
                message:'Admin already applied for this job'
            })
        }
        else{
            const newAppliedJob = new AppliedJob({
                jobId,
                adminId,
                appliedAt
            })

            await newAppliedJob.save();

            res.status(200).json({
                success:true,
                message:'Applied for job successfully'
            })
        }

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
})

// Fetch all jobs applied by a specific admin

router.get("/applied-jobs/:adminId", async(req, res) => {

    try {
        
        const {adminId} = req.params;

        if(!adminId){
            res.status(400).json({
                success:false,
                message:"AdminId is required"
            })
        }

        // Find all applied jobs by the admin
        const appliedJobs = await AppliedJob.find({adminId}).populate('jobId');

        res.status(200).json(appliedJobs);
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
})