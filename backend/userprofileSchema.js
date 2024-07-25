
const mongoose = require("mongoose");

const profileStructure = new mongoose.Schema({
    adminId: {
        type:String,
        required:true
    },
    personalDetails: {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        phone:{
            type:String,
            required:true
        },
        professionalSummery:{
            type:String,
        },
    },
    education: [
        {
            institution: String,
            degree: String,
            fieldOfStudy: String,
            startDate: Date,
            endDate: Date
        }
    ],
    workExperience: [
        {
            jobTitle: String,
            company: String,
            startDate: Date,
            endDate: Date,
            description: String
        }
    ],
    skills: [String],
    languages: [String],
    linkedIn: String,
    github: String,
    portfolio: String,
    resume: String,
    profilePicture: String
})

module.exports = mongoose.model("UserProfile", profileStructure);