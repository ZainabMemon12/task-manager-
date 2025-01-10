const express = require('express')
const app = express()
const tasks = require('./routes/tasks.js')
const connectDB = require('./db/connect.js')
require('dotenv').config()

// middle wares
app.use(express.json())
app.use(express.static('./public'))

// routes
app.get('/hello', (req, res) => {
    res.send('task manager app')
})
app.use('/api/v1/tasks', tasks)

const port = 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`server is running on port ${port}`)
        })
    }
    catch (err) {
        console.log(err)
    }
}
start()  // start the server



