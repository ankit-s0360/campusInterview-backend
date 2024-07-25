const express = require("express");
const router = express.Router();
module.exports = router;
// const nodemailer = require('nodemailer');


router.post("/", async(req, res) => {
    
    var nodemailer = require('nodemailer');
    
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ankitsoni0360@gmail.com',
        pass: 'fhcn hsfz tqkd sfeo'
      }
    });
    
    // var mailOptions = {
    //   from: 'ankitsoni0360@gmail.com',
    //   to: req.body.toemail,
    //   subject: req.body.mysubject,
    //   text: req.body.mymessage
    // };

    var mailOptions = {
        from: 'ankitsoni0360@gmail.com',
        to: 'ankitkumar0737@gmail.com',
        subject: 'Ankit Soni',
        text: 'Hello how are you ?'
      };
    
    transporter.sendMail(mailOptions, function(error, info){

      if (error) {
        res.status(200).json({
            message:"Error while sending email",
            error:error.message
        })
      } else {
        res.status(200).json({
            message:`Email sent successfully, ${info.response}`
        })
      }
    });

});