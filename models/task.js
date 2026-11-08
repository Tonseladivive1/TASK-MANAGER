const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'task name must be provided'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.models.Task || mongoose.model('Task', TaskSchema)
