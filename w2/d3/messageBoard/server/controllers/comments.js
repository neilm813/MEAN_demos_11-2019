const mongoose = require('mongoose');
const Message = mongoose.model('Message');
const Comment = mongoose.model('Comment');

module.exports = {
  create(req, res) {
    Message.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          comments: new Comment(req.body)
        }
      },
      {
        runValidators: true,
        new: true // will return updated document rather than old one
      },
      (err, newDoc) => {
        console.log(err);
        res.redirect('/');
      }
    )
  }
}