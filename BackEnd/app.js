const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
 
const url = 'mongodb://localhost/Task'

const app = express()
app.use(cors())
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const taskRouter = require('./routes/task')
app.use('/task',taskRouter)

app.listen(9090, () => {
    console.log('Server started')
})