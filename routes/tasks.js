const router = require('express').Router();
const TasksController = require('../controller/tasks');

//find all tasks
router.get('/',TasksController.index);

//creat a new task
router.post('/create',TasksController.create);

//update a task
router.get('/update/:id',TasksController.edit);
router.put('/update/:id',TasksController.update);

//delete a task
router.delete('/delete/:id',TasksController.delete);

module.exports = router;