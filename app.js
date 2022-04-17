const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/ToDo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const schema = new mongoose.Schema({ title: String });
const Task = mongoose.model('Task', schema);

//insert //localhost:3000/create/:title
app.post('/create', (req, res) => {
  const firstTask = new Task({ title: req.body.title });
  firstTask.save().then(() => res.redirect('/'));
});
//find//show
app.get('/', (req, res) => {
  Task.find({}, (error, tasks) => {
    if (error) console.log(`there was an error: ${error}`);
    else {
      res.render('todo.ejs');
    }
  });
});

//delete //localhost:3000/delete/:id
app.get('/delete/:id', (req, res) => {
  Task.deleteOne({ _id: req.params.id }, (error) => {
    if (error) console.log(`there was an error: ${error}`);
    else {
      console.log('one task was deleted');
    }
  });
});
//update
app.get('/update/:id/:title', (req, res) => {
  Task.updateOne(
    { _id: req.params.id },
    { title: req.params.title },
    (error) => {
      if (error) console.log(`there was an error: ${error}`);
      else {
        console.log('task is updated');
      }
    }
  );
});

app.listen(3000, () => console.log('express has started!'));
