const cakes = require('../controllers/cake');

module.exports = function(app){
    app.get('/api/cakes', cakes.index);
    app.post('/api/cakes', cakes.create);
    app.get('/api/cakes/:id', cakes.findOne);
    app.put('/api/cakes/:id', cakes.addReview);
}