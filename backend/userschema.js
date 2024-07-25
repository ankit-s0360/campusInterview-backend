const mongoose = require("mongoose");

const tableStructure = new mongoose.Schema({
    fullname : {type:String, required:true},
    mobile   : {type:Number, required:true},
    email    : {type:String, required:true},
    address  : {type:String}
});

module.exports = mongoose.model("User", tableStructure);