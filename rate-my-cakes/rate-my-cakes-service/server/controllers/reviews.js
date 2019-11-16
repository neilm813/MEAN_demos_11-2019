const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');

module.exports = {
  create(req, res) {
    Cake.findByIdAndUpdate(
      req.params.cakeId,
      { $addToSet: { reviews: req.body } },
      { new: true, runValidators: true },
      (err, cake) => {
        if(err) {
          return res.json({ errors: err });
        }
        
        res.json({ cake });
      }
    );
  }
}