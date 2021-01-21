const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use('/iecho', require('./routes/iecho'))

app.listen(8081)
module.exports = app
