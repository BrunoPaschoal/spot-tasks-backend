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
    },
    taskDetails: {
        type: String,
        default: ''
    },
    tag: {
        tagCode: {type: Number, default: 0},
        color: {type: String, default: ''}
    }
})

module.exports = Task;