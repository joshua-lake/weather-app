const express = require('express')
const router = express.Router()

const apiWeather = require('../api/weather')

router.get('/:cityname', (req, res) => {
  console.log('weather api')
  const city = req.params.cityname
  apiWeather.getWeather(city)
    .then(results => {
      res.json(results)
      // console.log(results)
      return null
    })
    .catch(err => {
      console.error(err)
    })
})

module.exports = router
