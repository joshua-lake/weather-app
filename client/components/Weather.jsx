import React, { useEffect, useState } from 'react'
import { getWeather } from '../api'

import { tempConversion } from './weatherHelper'

function Weather (props) {
  const [cityWeather, setCityWeather] = useState('')
  const { city } = props

  useEffect(() => {
    getWeather(props.city)
      .then(weather => setCityWeather(weather))
      .catch(err => {
        console.error(err)
      })
  }, [city])

  // const wetherData = cityWeather.wind ? cityWeather : 'Error'
  // console.log(wetherData)

  const tempConverted = cityWeather.main ? Math.round(tempConversion(cityWeather.main.temp)) : null
  const feelsLikeConverted = cityWeather.main ? Math.round(tempConversion(cityWeather.main.feels_like)) : null
  const weatherIcon = cityWeather.main ? `https://openweathermap.org/img/w/${cityWeather.weather[0].icon}.png` : null

  return (
    cityWeather.main
      ? <div>
        <div className='weather'>
          <div className='location'>
            <div className='city'>
              {cityWeather.name}
            </div>
            <div className='country'>
              {cityWeather.sys.country}
            </div>
          </div>
          <img src={weatherIcon} className='icon'></img>
        Tempertaure: {tempConverted} Degrees
        Feels like: {feelsLikeConverted} Degrees
        Humidity :{cityWeather.main.humidity}
        </div>
      </div>
      : null
  )
}

export default Weather
