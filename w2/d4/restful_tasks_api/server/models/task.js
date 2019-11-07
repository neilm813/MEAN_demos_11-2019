const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

// creates collection named 'tasks' (lowercases and pluralizes)
mongoose.model('Task', TaskSchema);