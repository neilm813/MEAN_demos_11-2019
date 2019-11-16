const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
  baker_name: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  reviews: [new mongoose.Schema({
    rating: {
      type: Number,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  }, { timestamps: true })]
}, { timestamps: true });

mongoose.model('Cake', CakeSchema);