const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let Image = require('./imageschema');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

router.route('/').post(upload.single('photo'), (req, res) => {
    const name = req.body.name;
    const birthdate = req.body.birthdate;
    const photo = req.file.filename;

    const newUserData = {
        name,
        birthdate,
        photo
    }
    const newUser = new Image(newUserData);
    newUser.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get( async(req, res) => {
    let allimage = await Image.find();
    res.status(201).json(allimage);
})




module.exports = router;