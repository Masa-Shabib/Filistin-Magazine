const {City}  = require('../models/cities.model');
module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

 module.exports.createCity= (request, response) => {
     const { name, location,img1, img2,desc,link1,area} = request.body;
     City.create({
      name, location,img1, img2,desc,link1,area
     })
         .then(city => response.json(city))
         .catch(err => response.status(400).json(err));
 }

 module.exports.getAllCities = (request, response) => {
    City.find({})
         .then(city => response.json(city))
         .catch(err => response.json(err))
 }

 module.exports.getCity= (request, response) => {
    City.findOne({_id:request.params.id})
         .then(city => response.json(city))
         .catch(err => response.json(err))
 }

// module.exports.getTaskTitle = (request, response) => {
//     Task.findOne({title:request.params.title})
//         .then(task => response.json(task))
//         .catch(err => response.json(err))
// }
 module.exports.updateCity = (request, response) => {
    City.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
         .then(city => response.json(city))
         .catch(err => response.status(400).json(err))
 }

 module.exports.deleteCity = (request, response) => {
    City.deleteOne({ _id: request.params.id })
         .then(deleteConfirmation => response.json(deleteConfirmation))
         .catch(err => response.json(err))
 }