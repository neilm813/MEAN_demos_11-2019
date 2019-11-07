const messagesController = require('../controllers/messages');
const commentsController = require('../controllers/comments');

module.exports = function (app) {
  app.get('/', messagesController.index);
  app.post('/messages/create', messagesController.create);
  app.post('/messages/:id/comment', commentsController.create);
}