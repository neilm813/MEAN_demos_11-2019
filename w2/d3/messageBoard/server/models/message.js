const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, { timestamps: true });

mongoose.model('Comment', CommentSchema);

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  comments: [CommentSchema]
}, { timestamps: true });

mongoose.model('Message', MessageSchema);