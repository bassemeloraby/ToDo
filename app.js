const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');

const Task = require('./model/tasks');
app.use(methodOverride('_method',{methods:['POST','GET']}));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/ToDo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



//insert //localhost:3000/create/:title
// app.post('/create', );
//find//show
// app.get('/', );

//delete //localhost:3000/delete/:id
app.delete('/delete/:id', );

//update
// app.get('/update/:id', );

// app.put("/update/:id",)

app.listen(3000, () => console.log('express has started!'));
