const express = require('express')
const router = express.Router()

const apiLocations = require('../api/locations')

router.get('/', (req, res) => {
  apiLocations.getLocations()
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.error(err)
    })
})

module.exports = router
