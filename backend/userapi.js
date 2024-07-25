
const express = require("express");
const router = express.Router();
module.exports = router;

const User = require("./userschema");

router.get("/", async(req, res) => {
    let userlist = await User.find();
    // let data = {"message": "your user api is working"};
    res.status(200).json(userlist);
})

router.post("/", async(req, res) => {
    let newUser = User({
        fullname: req.body.uname,
        mobile: req.body.umobile,
        email: req.body.uemail,
        address: req.body.uaddress
    })

    let info = await newUser.save();
    res.status(200).json(info);
});

router.put("/", async(req, res) => {
    let id = req.body.userid;
    let userinfo = await User.findById(id);
    
    userinfo.fullname= req.body.uname,
    userinfo.mobile= req.body.umobile,
    userinfo.email= req.body.uemail,
    userinfo.address= req.body.uaddress

    await userinfo.save();
    res.status(200).json({"message":"Record updated Successfully"});
});

 // http://localhost:4444/user/userinfo
router.post("/userinfo", async(req, res) => {
    let id = req.body.id;
    let details = await User.findById(id);
    res.status(200).json(details);
})

// http://localhost:4444/user/deleteuser
router.delete("/deleteuser", async(req, res) => {
    let id = req.body.id;
    let userinfo = await User.findById(id);
    if(userinfo == null){
        res.status(200).json({"message": "No such record"})
    }else{
        await userinfo.deleteOne();
        res.status(200).json({"message": "Record deleted successfully"})
    }
})

