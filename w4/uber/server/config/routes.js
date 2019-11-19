const ridesController = require('../controllers/rides');
const passengersController = require('../controllers/passengers');

module.exports = function (app) {
  app.get('/api/rides', ridesController.all);
  app.get('/api/rides/:id', ridesController.getOne);
  app.post('/api/rides', ridesController.create);
  app.put('/api/rides/:id', ridesController.update);
  app.delete('/api/rides/:id', ridesController.delete);

  app.post('/api/passengers/:rideId', passengersController.create);
  app.post('/api/passengers/bulk/:rideId', passengersController.createBulk);
  app.delete('/api/passengers/:passengerId/rides/:rideId', passengersController.delete);
}