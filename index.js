const express = require('express');
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
let url = 'mongodb://127.0.0.1:27017/test_node'

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise

let db = mongoose.connection
db.on('error', console.error.bind(console, 'Error to connect to DB'))




const users = require('./routes/user.routes')

const app = express()
app.use(bodyParser.json())

app.use('/', users)


app.listen(3000)