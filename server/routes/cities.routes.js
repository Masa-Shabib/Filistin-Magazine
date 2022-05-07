const CityController = require('../controllers/cities.controller');
module.exports = function(app){
    app.get('/api', CityController.index);
    app.post('/api/city', CityController.createCity);
    app.get('/api/city', CityController.getAllCities);
    app.get('/api/city/:id', CityController.getCity);
    // app.get('/api/task/find/:title', TaskController.getTaskTitle);
     app.put('/api/city/:id', CityController.updateCity);
     app.delete('/api/city/:id', CityController.deleteCity);
}