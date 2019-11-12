const mongoose = require('mongoose');

const Task = mongoose.model('Task');

module.exports = {
  index(req, res) {
    Task.find()
      .then(allTasks => res.json({
        tasks: allTasks,
        msg: 'DO YOUR TASKS - FROM MOM'
      }))
      .catch(err => {
        res.json({ error: err });
    });

    // shorthand: return an obj with a key called error
    // the val of the key will be the val of the param
    // this shorthand works because param and key same name
    // .catch(error => res.json({ error }));
  },

  create(req, res) {
    Task.create(req.body)
      .then(newTask => {
        res.json({ newTask: newTask });
      })
      .catch(err => {
        res.json({ error: err });
      });
  },

  update(req, res) {
    Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        // will return the new updated obj rather than
        // the object before the update
        new: true
      }
    )
    .then(newTask => {
      res.json({ task: newTask });
    })
    .catch(err => {
      res.json({ error: err });
    });
  },

  getById(req, res) {
    Task.findById(req.params.taskId)
      .then(task => {
        res.json({ task: task });
      })
      .catch(err => {
        res.json({ error: err });
      });
  },

  delete(req, res) {
    Task.findByIdAndDelete(req.params.id)
      .then(deletedTask => {
        res.json({ deleted: deletedTask });
      })
      .catch(err => {
        res.json({ error: err });
      });
  }
}