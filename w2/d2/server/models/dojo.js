const mongoose = require('mongoose');

const DojoSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

// register the model with mongoose, tie the model
// to it's schema to enforce the schema's structure
mongoose.model('Dojo', DojoSchema);