import React, { useState, useEffect } from 'react'
import { getLocations } from '../api'
// import { Select } from 'react-select'

function Menu (props) {
  const [menu, setMenu] = useState(false)

  const { setCity } = props

  function handleClick (event) {
    event.preventDefault()
    menu === false
      ? setMenu(true)
      : setMenu(false)
  }

  useEffect(() => {
    getLocations()
      .then(results => {
        props.setLocations(results)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const handleChange = (event) => {
    event.preventDefault()
    setCity(event.target.value)
  }

  return (
    <div>
      <button onClick={handleClick} className='test'>
        Show Cities
      </button>
      {
        menu
          ? <select onChange={handleChange}>
            <option value='auckland'>Auckland</option>
            <option value='wellington'>Wellington</option>
            <option value='london'>London</option>
            <option value='paris'>Paris</option>
            <option value='new york'>New York</option>
            <option value='bahrain'>Bahrain</option>
            <option value='totoras'>Totoras</option>
          </select>
          : null
      }

      {/* <Select/> */}

    </div>
  )
}

export default Menu
