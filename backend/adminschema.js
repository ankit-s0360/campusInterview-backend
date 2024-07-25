const mongoose = require("mongoose");

const tableStructure = new mongoose.Schema({
    fullname : {type:String, required:true},
    mobile   : {type:Number, required:true},
    email    : {type:String, required:true},
    password  : {type:String}
});

module.exports = mongoose.model("Admin", tableStructure);