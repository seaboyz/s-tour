const express = require('express')

const rootRoute = require('./routes/root')

const app = express()

// root route
app.use('/', rootRoute)


app.listen(3000)