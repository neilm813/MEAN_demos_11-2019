const mongoose = require('mongoose');
const { readdirSync } = require('fs');
const { resolve } = require('path');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost/rate_my_cakes');

const modelsPath = resolve(__dirname, '../models');

readdirSync(modelsPath).forEach(file => {
  if(file.indexOf('.js') > -1) {
    require(modelsPath + '/' + file);
  }
});