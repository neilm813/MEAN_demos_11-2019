const mongoose = require('mongoose');

const Cake = mongoose.model('Cake');

module.exports = {
  getAll(_, res) {
    Cake.find((_, cakes) => {
      res.json({ cakes });
    });
  },

  create(req, res) {
    new Cake(req.body).save((err, cake) => {
      if (err) {
        return res.json({ error: err });
      }

      res.json({ cake });
    });
  }
}