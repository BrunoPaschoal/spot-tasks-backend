const mongoose = require("mongoose");

const Task = mongoose.model('Task', {
    description: String,
    createdAt: Date,
    userId: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = Task;