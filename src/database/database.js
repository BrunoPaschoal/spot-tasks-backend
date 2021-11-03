const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://brrunorocha:${process.env.DBKEY}@cluster0.lnhrh.mongodb.net/spottasks?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})