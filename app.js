require('dotenv').config()
const express = require('express')
const tasksRouter = require('./routes/task')
const connectDb = require('./db/connect')

const app = express()
//middlewares
app.use(express.static('./public'))
app.use(express.json())
//routes
app.use('/api/v1/tasks', tasksRouter)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URI)
    app.listen(port, () => {
      console.log('Server is listening on port ' + port)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
