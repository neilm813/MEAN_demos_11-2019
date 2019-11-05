// file system
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');


// require 1 file at a time
// require('../models/dojo');

// programmatically require all .js files that are in models folder
const modelsPath = path.join(__dirname, '../models');

fs.readdirSync(modelsPath).forEach(file => {
  console.log(file);
  if (file.includes('.js')) {
    require(path.join(modelsPath, file));
  }
});

mongoose.connect('mongodb://localhost/mongoose_demo', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});