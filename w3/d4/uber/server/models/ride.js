const mongoose = require('mongoose');

const PassengerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [2, "{PATH} must be at least {MINLENGTH} characters."]
  }
}, { timestamps: true });

const RideSchema = new mongoose.Schema({
  driver: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [2, "{PATH} must be at least {MINLENGTH} characters."]
  },
  capacity: {
    type: Number,
    required: [true, "{PATH} is required."],
    min: [1, "{PATH} must be at least {MIN}"],
    max: [8, "{PATH} cannot exceed {MAX}"]
  },
  destination: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [2, "{PATH} must be at least {MINLENGTH} characters."]
  },
  passengers: [PassengerSchema]

}, { timestamps: true });

mongoose.model('Passenger', PassengerSchema);
mongoose.model('Ride', RideSchema);
