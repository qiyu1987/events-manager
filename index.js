const express = require('express')
const app = express()
const port = 4000
const db = require('./db')
const Event = require('./event/model')
app.listen(port, ()=> console.log(`listening on port ${port}`))