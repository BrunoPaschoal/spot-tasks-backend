const mongoose = require("mongoose");

const Project = mongoose.model('Project', {
    createdAt: {
        type: Date,
        default: Date.now
    },
    projectName: {
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = Project;