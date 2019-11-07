const mongoose = require('mongoose');
const Message = mongoose.model('Message');

module.exports = {
  index(req, res) {
    let allMessages = [];

    Message.find()
      .then(messages => {
        allMessages = messages;
        // console.log(allMessages);
      })
      .catch(console.log)
      // finally, no matter what, render all the messages
      // which will be empty if there was an error, otherwise
      // allMessages will contain the returned messages
      .finally(() => {
        res.render('index', { messages: allMessages });
      });
  },

  create(req, res) {
    // req.body is the information typed into the form
    // the input name attrs match our models's keys
    Message.create(req.body)
      .catch(err => {
        console.log(err);
      })
      // finally means no matter what, run this
      // whether there is an error or not
      .finally(() => res.redirect('/'));
  }
}