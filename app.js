const express = require('express')

const rootRoute = require('./routes/root')
const destinationRoute = require('./routes/destination')

const app = express()

// root route
app.use('/', rootRoute)

// destintion route
app.use('/destination', destinationRoute)

app.listen(3000)