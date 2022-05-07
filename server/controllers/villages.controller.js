const {City}  = require('../models/cities.model');
const {Village}  = require('../models/villages.model');


 module.exports.createVillage= (request, response) => {
    const cityId = request.params;
    id = cityId.id;
     const { name, location,img1, img2,desc,link1,area} = request.body;
     addCity = City.findOne({_id:id})
     console.log(addCity)
     Village.create({
      name, location,img1, img2,desc,link1,area, city:id,
     })
    .then(village =>{response.json(village);
        })
    .catch(err => response.status(400).json(err))}

 module.exports.getAllVillages = (request, response) => {
    Village.find({})
         .then(village => response.json(village))
         .catch(err => response.json(err))
 }

 module.exports.getVillage = (request, response) => {
    Village.findOne({_id:request.params.id})
         .then(village => response.json(village))
         .catch(err => response.json(err))
 }

// module.exports.getTaskTitle = (request, response) => {
//     Task.findOne({title:request.params.title})
//         .then(task => response.json(task))
//         .catch(err => response.json(err))
// }
 module.exports.updateVillage = (request, response) => {
    Village.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
         .then(village => response.json(village))
         .catch(err => response.json(err))
 }

 module.exports.deleteVillage = (request, response) => {
    Village.deleteOne({ _id: request.params.id })
         .then(deleteConfirmation => response.json(deleteConfirmation))
         .catch(err => response.json(err))
 }