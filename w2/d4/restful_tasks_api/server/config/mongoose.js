const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restful_tasks_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

require('../models/task');