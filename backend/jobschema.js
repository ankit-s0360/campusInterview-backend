const mongoose = require("mongoose");

const jobStructure = new mongoose.Schema({
    company:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:[true, 'Job title is required']
    },
    salary:{
        type:String,
        required:[true, 'Salary is required']
    },
    location:{
        type:String
    },
    description:{
        type:String
    },
    jobType:{
        type:String
    },
    postedOn: {
        type: String
    }
});

module.exports = mongoose.model('Job', jobStructure);