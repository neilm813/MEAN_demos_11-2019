const authorsController = require('../controllers/authors');

module.exports = function (app) {
  app.get('/api/authors', authorsController.all);
  app.get('/api/authors/:id', authorsController.getOne);
  app.post('/api/authors', authorsController.create);
  app.delete('/api/authors/:id', authorsController.delete);
  app.put('/api/authors/:id', authorsController.update);
}