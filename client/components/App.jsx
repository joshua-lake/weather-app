import React, { useState } from 'react'

import Menu from './Menu'
import Weather from './Weather'

const App = () => {
  const [city, setCity] = useState('auckland')
  const [locations, setLocations] = useState('')
  console.log('locations', locations)

  return (
    <div className='body'>
      <div className='within-body'>
        <Menu setCity={setCity} setLocations={setLocations}/>
        <Weather city={city}/>
      </div>
    </div>
  )
}

export default App
