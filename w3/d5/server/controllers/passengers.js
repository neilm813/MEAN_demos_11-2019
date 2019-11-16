const mongoose = require('mongoose');
const Passenger = mongoose.model('Passenger');
const Ride = mongoose.model('Ride');


module.exports = {

  create(request, response) {
    Ride.findById(request.params.rideId)
      .then((ride) => {

        if (ride.passengers.length === ride.capacity) {
          response.json({
            errors: {
              message: "full capacity."
            }
          });
        }
        else { // capacity not full
          // new Passenger runs Passenger model validations
          ride.passengers.push(new Passenger(request.body));

          ride.save()
            .then((updatedRide) => {
              response.json({ ride: updatedRide });
            })
            // catch errors that happen from .save
            .catch((errors) => {
              response.json({ errors: errors });
            });
        }
      })
      // catch errors that happen from finding a ride
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  delete(request, response) {
    Ride.findByIdAndUpdate(
      request.params.rideId,
      {
        // pull out a passenger from the array by passengerId
        $pull: {
          passengers: {
            _id: request.params.passengerId
          }
        }
      },
      {
        // only removing a passenger, so validations
        // shouldne't be needed
        // runValidators: true,
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

  // create that does not validate capacity
  // create(request, response) {
  //   Ride.findByIdAndUpdate(
  //     request.params.rideId,
  //     {
  //       $push: {
  //         passengers: new Passenger(request.body)
  //       }
  //     },
  //     {
  //       runValidators: true,
  //       new: true
  //     }
  //   )
  //     .then((updatedRide) => {
  //       response.json({ ride: updatedRide });
  //     })
  //     .catch((errors) => {
  //       response.json({ errors: errors });
  //     });
  // }
};