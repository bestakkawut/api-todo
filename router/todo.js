const express = require('express');
const router = express.Router();
const { 
	retrieveTask,
	createTask,
	updateTask,
	deleteTaskWithID
} = require('../controllers/todo')

router.get('/:id', retrieveTask.retrieveTaskWithID)
router.get('/', retrieveTask.retrieveTasks)
router.post('/', createTask)
router.patch('/:id', updateTask.patchTaskWithID)
router.put('/:id', updateTask.updateTaskWithID)
router.delete('/:id', deleteTaskWithID)


module.exports = router;
