// import request from 'superagent'
const request = require('superagent')

async function getWeather (city) {
  try {
    const response = await request(`api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d4a673dc614e8c582e1c4b2a1e8c77c2`)
    // console.log('server api')
    return response.body
  } catch (error) {
    console.error(error)
  }
}

module.exports = { getWeather }
