const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "City Name is required"
        ],
        minlength:[ 3,"City Name must be at least 3 letters"] ,
        unique: true
    },location: {
        type: String,
        required: [
            true,
            "City Location is required"
        ],
        minlength:[ 3,"City Location must be at least 3 letters"] ,
    },img1: {
        type: String,
        required: [
            true,
            "Image is required"
        ],
    },img2: {
        type: String,
    },desc: {
        type: String,
        required: [
            true,
            "City Description is required"
        ],
        minlength:[ 15,"City Description must be at least 15 letters"] ,
    },link1: {
        type: String,
    },area: {
        required: [
            true,
            "City Area is required"
        ],
        type: Number,
    },villages : [
        {type: mongoose.Schema.Types.ObjectId,ref:'Village'}
    ]
}, { timestamps: true });

module.exports.City = mongoose.model('City', CitySchema);