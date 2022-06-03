import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const GeocodeContext = createContext()

export const GeocodeContextProvider = (props) => {
  const { street, city, state, zip } = props;
  const [data, setData] = useState()
  // const apiKey = '2f78458c224445cea7e8c6cb46bf367a'

  useEffect(() => {
    axios
      .get(
        `https://geocoding.geo.census.gov/geocoder/locations/address?street=${street}&city=${city}&state=${state}zip=${zip}&benchmark=Public_AR_Census2020&format=json`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <GeocodeContext.Provider value={{ data }}>
      {props.children}
    </GeocodeContext.Provider>
  )
}
