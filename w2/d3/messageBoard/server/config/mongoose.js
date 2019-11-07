const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://localhost/message_board', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // for deprecation warning from .findByIdAndUpdate
  useFindAndModify: false
});

// require 1 model at a time
// requiring the file makes it get executed
// when the model file is executed, that is when
// the model is registered with mongoose
require('../models/message');

// programmatically require all .js files that are in models folder
// const modelsPath = path.join(__dirname, '../models');

// fs.readdirSync(modelsPath).forEach((fileName) => {
//   if (fileName.includes('.js')) {
//     require(path.join(modelsPath, fileName));
//   }
// });