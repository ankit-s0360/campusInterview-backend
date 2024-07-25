const mongoose = require("mongoose");

const appliedJobStructure = new mongoose.Schema({
    jobId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:[true, "Jobid Id is required"]
    },
    adminId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Admin',
        required:[true, "Admin Id is required"]
    },
    appliedAt:{
        type: String
    }
});

module.exports = mongoose.model('AppliedJob', appliedJobStructure);