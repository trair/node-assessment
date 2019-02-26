const express = require('express')
const controller = require('./usersCtrl')
const app = express()
app.use(express.json())

// Endpoints
// Number 1
app.get('/api/user', controller.getAllUsers)

// Number 2
app.get('/api/user/:userID', controller.getUserByID)

// Number 3
app.get('/api/admin', controller.getAdmins)

// Number 4
app.get('/api/nonadmin', controller.getNonAdmins)

// Number 5
app.get('/api/type/:userType', controller.getUserByType)

// Number 6
app.put('/api/user/:userID', controller.updateUser)

// Number 7
app.post('/api/user', controller.newUser)

// Number 8
app.delete('/api/user/:userID', controller.deleteUser)

const SERVER_PORT = 3000
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))