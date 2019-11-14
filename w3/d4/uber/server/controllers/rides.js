const mongoose = require('mongoose');
const Ride = mongoose.model('Ride');

module.exports = {
  all(request, response) {
    // find all
    Ride.find()
      .then((rides) => {
        response.json({ rides: rides });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  create(request, response) {
    Ride.create(request.body)
      .then((newRide) => {
        response.json({ ride: newRide });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  getOne(request, response) {
    Ride.findById(request.params.id)
      .then((ride) => {
        response.json({ ride: ride });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  delete(request, response) {
    Ride.findByIdAndDelete(request.params.id)
      .then((deletedRide) => {
        response.json({ ride: deletedRide });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  update(request, response) {
    Ride.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        runValidators: true,
        // return the newly updated ride
        new: true
      }
    )
      .then((updatedRide) => {
        response.json({ ride: updatedRide });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  }

}