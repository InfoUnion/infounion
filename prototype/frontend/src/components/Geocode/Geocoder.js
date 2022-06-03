import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const GeoContext = createContext()


export const Geocoder = (props) => {
  const { street, city, state, zip } = props
  const [data, setData] = useState()

  // const apiKey = '2f78458c224445cea7e8c6cb46bf367a'

  async function getCoords(street, city, state, zip) {
    try {
      const response = await axios.get(`http://localhost:4000/map?street=${street}&city=${city}&state=${state}&zip=${zip}`)
      return response
    } catch (error) {
      // We're not handling errors. Just logging into the console.
      console.log(error)
      return false
    }
  }

  React.useEffect(() => {
    getCoords(street, city, state, zip).then(result => {
      if (result) { setData(result.data) }
    })
  }, [])

  return (
    <GeoContext.Provider value={{ data }}>
      {props.children}
    </GeoContext.Provider>
  )
}