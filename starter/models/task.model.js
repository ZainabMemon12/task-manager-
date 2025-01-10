const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxLength: [20, "name must be under 20 characters"],
    },
    completed: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('task', TaskSchema)
