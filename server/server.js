const express = require('express')
const path = require('path')

const weatherRoute = require('./routes/weather')
const locationsRoute = require('./routes/locations')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/weather', weatherRoute)
server.use('/api/v1/locations', locationsRoute)

module.exports = server
