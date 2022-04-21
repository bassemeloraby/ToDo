
const router = require('express').Router();
const TasksController = require('../controllers/tasks');
//find all tasks
router.get('/', TasksController.index);

//create
router.post('/create',TasksController.create);

//update
router.get('/update/:id',TasksController.edit);
router.put('/update/:id',TasksController.update);

//delete
router.delete('/delete/:id',TasksController.delete);

module.exports = router;