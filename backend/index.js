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
const PetRoutes = require('./routes/PetRoutes')

app.use('/users', UserRoutes)
app.use('/pets', PetRoutes)
// Routes
app.listen(5000)

