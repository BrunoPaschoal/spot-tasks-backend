const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/spottasks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})