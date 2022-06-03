// import React from 'react'

import axios from 'axios'

// function Regions() {
// const [temp, setTemp] = React.useState([]);
// const [regions, setRegions] = React.useState([])
async function cities() {
  try {
    const response = await axios.get('http://localhost:4000/cities')
    //console.log("Cities response", response);
    return response
  } catch (error) {
    // We're not handling errors. Just logging into the console.
    console.log(error)
    return false
  }
}

const getCities = (async () => {
  let result = await cities();
  if (result) {
    // setRegions(result.data)
    return result.data.map((city) => (createData(city)));
  }
});


function createData(name) {
  return { name }
}


// }

export default getCities;
