const Task = require('../models/task.model.js')


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })

    }
    catch {
        res.status(500).json({ message: 'Error fetching tasks' })
    }
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    }
    catch {
        res.status(501).json({ message: "Error creating task" })
    }
}
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            res.status(404).json({ message: `Task not found${taskID}` })
        }
        res.status(200).json({ task })


    }
    catch {
        res.status(500).json({ message: 'Error fetching task' })
    }

}
const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID },req.body,{
            new :true,
            runValidators:true
        })
        if (!task) {
            res.status(404).json({ message: `Task not found ${taskID}` })
        }
        res.status(200).json({ task })
    }

    catch {
        res.status(500).json({ message: 'Error updating task' })
    }
}
const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            res.status(404).json({ message: `Task not found ${taskID}` })
        }
        res.status(200).json({ task })


    }
    catch {
        res.status(500).json({ message: 'Error deleting task' })
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}