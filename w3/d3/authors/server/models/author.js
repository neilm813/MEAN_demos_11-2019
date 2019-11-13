const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [
      3,
      "{PATH} must be at least {MINLENGTH} characters."
    ]
  },
  age: {
    type: Number,
    required: [true, "{PATH} is required."],
    min: [
      15,
      "{PATH} must be greater than {MIN}."
    ]
  }

}, { timestamps: true });

mongoose.model('Author', AuthorSchema);