
const express = require("express");
const router = express.Router();
module.exports = router;

const Admin = require("./adminschema");


router.post("/", async(req, res) => {
    
    let email = req.body.email;
    let pass = req.body.password;
    let searchData = {"email":email, "password":pass};

    let userinfo = await Admin.find(searchData);
    res.status(200).json(userinfo);
});

// http://localhost:4444/login/profileinfo
router.post("/profileinfo", async(req, res) => {
    let id = req.body.id;
    let details = await Admin.findById(id);
    res.status(200).json(details);
})

router.post("/updateinfo", async(req, res) => {
    let id = req.body.id;
    let details = await Admin.findById(id);
    details.fullname = req.body.name;
    details.email = req.body.email;
    details.mobile = req.body.mobile;
    details.password = req.body.password;
    await details.save();
    res.status(200).json({
        message: "Profile updated successfully !"
    });
})

//http://localhost:4444/login/saveuser
router.post("/saveuser", async(req, res)=>{
    const mobile = 111111;
    let newuser = Admin({
        fullname:req.body.name,
        email:req.body.email,
        password:req.body.password,
        mobile:mobile                          //  ==>  To Save the USER Details
        
    });

    let info = await newuser.save();
    res.status(200).json( {"message" : "Registered Successfull"});
});

