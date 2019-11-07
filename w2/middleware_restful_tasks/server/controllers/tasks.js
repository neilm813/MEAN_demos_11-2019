const mongoose = require('mongoose');

const Task = mongoose.model('Task');

module.exports = {
  index(_, res) {
    Task.find()
      .then(tasks => res.json({ tasks }))
      .catch(e => res.json({ error: e }));
  },

  getById(req, res) {
    Task.findById(req.params.id)
      .then(task => res.json({ task }))
      .catch(error => res.json( { error }));
  },

  create(req, res) {
    Task.create(req.body)
      .then(newTask => res.json({ task: newTask }))
      .catch(error => res.json({ error }));
  },

  update(req, res) {
    Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true
      }
    )
    .then(newTask => res.json({ task: newTask }))
    .catch(error => res.json({ error }));
  },

  delete(req, res) {
    Task.findByIdAndDelete(req.params.id)
      .then(_ => res.json({ status: 'success' }))
      .catch(error => res.json({ error }));
  }
}