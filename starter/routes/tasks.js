const express = require('express')
const router = express.Router()
const {getAllTasks,createTask,getTask,updateTask,deleteTask} = require('../controllers/task.controller.js')

router.route('/').get(getAllTasks)
router.route('/').post(createTask)
router.route('/:id').get(getTask)
router.route('/:id').patch(updateTask)
router.route('/:id').delete(deleteTask)




module.exports = router