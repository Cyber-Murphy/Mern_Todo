const express= require('express')
const TaskRouter= express.Router()

const {createTask,toggleTask,findAllTask,deleteTask,editTask}= require('../controllers/taskcontroller')

TaskRouter.post('/',createTask)
TaskRouter.get('/',findAllTask)
TaskRouter.patch('/:id/toggle',toggleTask)
TaskRouter.delete('/:id/delete',deleteTask)
TaskRouter.patch('/:id/update',editTask)

module.exports=TaskRouter