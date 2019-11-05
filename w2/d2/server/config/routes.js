const dojosController = require('../controllers/dojos');

// exporting a single function
module.exports = function (app) {
  // all routes go here

  app.get('/', dojosController.index);
  app.post('/dojos', dojosController.create);
}