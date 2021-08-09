import request from 'superagent'
// const request = require('superagent')

const rootUrl = '/api/v1'

export function getWeather (city) {
  console.log('weather api')
  return request.get(`${rootUrl}/weather/${city}`)
    .then(res => res.body)
    .catch(err => {
      console.error(err)
    })
}

export function getLocations () {
  console.log('locations api')
  return request.get(`${rootUrl}/locations`)
    .then(res => res.body)
    .catch(err => {
      console.error(err)
    })
}
