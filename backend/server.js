const express = require("express");  // calling express framework
const app = express();              // creating object of express
const cors = require("cors");      // calling cors origin library to allow data communication between 2 server
app.use(cors());                  // creating object of cors library
app.use(express.json());         // enable json data communication


const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mern12")
const db = mongoose.connection;

db.on("error", (error)=>console.log("Error in database connection"));
db.on("open", ()=>console.log("Database is Connected..."));

const User = require("./userapi");
const Book = require("./bookapi")

app.use("/user", User);
// http://localhost:4444/user  (get, post, put, delete)

app.use("/book", Book);
// http://localhost:4444/book  (get, post, put, delete)

const myemail = require("./email");
app.use("/sendemail", myemail);   // http://localhost:4444/sendemail

const myimage = require("./imageapi");
app.use("/imagelist", myimage);   // http://localhost:4444/imagelist

const Admin = require("./adminapi");
app.use("/login", Admin);  // http://localhost:4444/login

const jobs = require('./jobapi.js');  // http://localhost:4444/jobs
app.use("/jobs", jobs);

const appliedJob = require("./appliedJob.js");  // http://localhost:4444/job/apply
app.use("/job/apply", appliedJob);

// const locationAndJobRole = require("./locationAndJobRoleApi.js");  // http://localhost:4444/job/location
// app.use("/job/location", locationAndJobRole);

const userProfile = require("./userProfileApi.js");  // http://localhost:4444/userprofile
app.use("/userprofile", userProfile);

app.listen(4444, function(){
    console.log("The server is live now");
})