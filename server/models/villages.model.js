const mongoose = require('mongoose');

const VillageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Village Name is required"
        ],
        minlength:[ 3,"Village Name must be at least 3 letters"] ,
        unique: true
    },location: {
        type: String,
        required: [
            true,
            "Village Location is required"
        ],
        minlength:[ 3,"Village Location must be at least 3 letters"] ,
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
            "Village Description is required"
        ],
        minlength:[ 15,"Village Description must be at least 15 letters"] ,
    },link1: {
        type: String,
    },area: {
        type: Number,
    },city :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'City'
    }
}, { timestamps: true });

module.exports.Village = mongoose.model('Village', VillageSchema);