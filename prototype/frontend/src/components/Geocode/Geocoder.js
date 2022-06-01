import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

function Geocoder() {

  const [data, setData] = useState()
  // const apiKey = '2f78458c224445cea7e8c6cb46bf367a'

  useEffect(() => {
    axios
      .get(
        // `https://geocoding.geo.census.gov/geocoder/locations/address?street=${street}&city=${city}&state=${state}zip=${zip}&benchmark=Public_AR_Census2020&format=json`
        'https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=4600+Silver+Hill+Rd%2C+Washington%2C+DC+20233&benchmark=2020&format=json',
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
  }, [])

  // console.log(data)

  return data
}

export default Geocoder
