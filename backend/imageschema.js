const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 

    photo: {
        type: String
    },

    birthdate: {
        type: String
    }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;