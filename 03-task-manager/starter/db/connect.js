const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://dinar:AniemMinem1958@cluster0.o8kqxfz.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = (url) => {
    return mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
}

module.exports = connectDB



