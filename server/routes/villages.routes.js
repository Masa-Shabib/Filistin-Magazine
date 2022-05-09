const VillageController = require('../controllers/villages.controller');
module.exports = function(app){
    app.post('/api/village', VillageController.createVillage);
    app.get('/api/village', VillageController.getAllVillages);
    app.get('/api/village/:id', VillageController.getVillage);
    // app.get('/api/task/find/:title', TaskController.getTaskTitle);
    app.put('/api/village/:id', VillageController.updateVillage);
    app.delete('/api/village/:id', VillageController.deleteVillage);
}