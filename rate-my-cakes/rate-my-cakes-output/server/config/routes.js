const cakesController = require('../controllers/cakes');
const reviewsController = require('../controllers/reviews');

const { Router } = require('express');

const api = Router();

// get all
api.get('/cakes', cakesController.getAll);

// create
api.post('/cakes', cakesController.create);

// post review
api.post('/cakes/:cakeId/reviews', reviewsController.create);

module.exports = app => app.use('/api', api);