const mongoose = require("mongoose");

const tableStructure = new mongoose.Schema({
    bookname : {type:String, required:true},
    price    : {type:Number, required:true},
    author   : {type:String, required:true},
    edition  : {type:Object}
});

module.exports = mongoose.model("Book", tableStructure);