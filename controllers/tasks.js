const Task = require('../model/tasks');

module.exports = {
  index: (req, res) => {
    Task.find({}, (error, tasks) => {
      if (error) console.log(`there was an error: ${error}`);
      else {
        res.render('todo.ejs', { todotasks: tasks });
      }
    });
  },
  create: (req, res) => {
    const firstTask = new Task({ title: req.body.title,name: req.body.name });
    firstTask.save().then(() => res.redirect('/'));
  },
  edit: (req, res) => {
    const id = req.params.id;
    Task.find({}, (error, tasks) => {
      res.render('todoEdit.ejs', { todotasks: tasks, idTask: id });
    });
  },
  update: (req, res) => {
    const id = req.params.id;
    Task.findByIdAndUpdate(id, { title: req.body.title,name: req.body.name  }, (err) => {
      if (err) return res.send(500, err);
      else res.redirect('/');
    });
  },
  delete: (req, res) => {
    Task.deleteOne({ _id: req.params.id }, (error) => {
      if (error) console.log(`there was an error: ${error}`);
      else {
        res.redirect('/');
      }
    });
  }
};
