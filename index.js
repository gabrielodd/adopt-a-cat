const express = require('express')
const cors = require('cors')

const app = express()

// Config JSON
app.use(express.json())

// Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:8888'}))

// Public
app.use(express.static('public'))

const UserRoutes = require('./routes/UserRoutes')
app.use('/users', UserRoutes)

// Routes
app.listen(5000)

