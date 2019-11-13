const mongoose = require('mongoose');
const Author = mongoose.model('Author');
const { flattenErrorsToArr } = require('../../helpers');

module.exports = {
  all(request, response) {
    // find all
    Author.find()
      .then((authors) => {
        response.json({ authors: authors });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  getOne(request, response) {
    Author.findById(request.params.id)
      .then((author) => {
        response.json({ author: author });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  create(request, response) {
    Author.create(request.body)
      .then((newAuthor) => {
        response.json({ author: newAuthor });
      })
      .catch((errors) => {
        response.json({ errors: flattenErrorsToArr(errors) });
      });
  },

  delete(request, response) {
    Author.findByIdAndDelete(request.params.id)
      .then((deletedAuthor) => {
        response.json({ author: deletedAuthor });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  update(request, response) {
    Author.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true, // to return updated doc
        runValidators: true
      }
    )
      .then((updatedAuthor) => {
        response.json({ author: updatedAuthor });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  }
}