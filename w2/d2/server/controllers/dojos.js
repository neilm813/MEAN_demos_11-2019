// shorthand
const Dojo = require('mongoose').model('Dojo');
// longform
// const mongoose = require('mongoose');
// const Dojo = mongoose.model('Dojo');

// exporting an object that has only methods in it
module.exports = {

  // req param is unused, we can replace it with an _ to signify it is unused
  // when .then is executed it is passed the returned data
  index(req, res) {
    Dojo.find()
      .then((allDojos) => {
        res.render('index', { dojos: allDojos });
      })
      .catch((err) => {
        console.log(err);

        res.render('index', { dojos: [] })
      });
  },

  // req.body is the info from the form inputs
  // .then is not needed here because we just want to
  // redirect to index no matter what
  // finally runs whether there is an error or not
  create(req, res) {

    Dojo.create(req.body)
      .catch(err => console.log(err))
      .finally(() => res.redirect('/'));
  },
}