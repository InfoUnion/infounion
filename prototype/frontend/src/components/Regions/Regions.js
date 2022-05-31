import React from 'react'

import axios from 'axios'

function Regions() {

  const [regions, setRegions] = React.useState([])
  async function states() {
    try {
      const response = await axios.get('http://localhost:4000/states')
      return response
    } catch (error) {
      // We're not handling errors. Just logging into the console.
      console.log(error)
      return false
    }
  }

  React.useEffect(() => {
    states().then(result => {
      if (result) { setRegions(result.data) }
    })
  }, [])

  let temp = regions.map((r) => {
    switch (r) {
      case 'CA':
        return [r, 'California'];
      case 'CT':
        return [r, 'Connecticut'];
      case 'DC':
        return [r, 'Washington DC'];;
      case 'MN':
        return [r, 'Minnesota'];
      case 'MO':
        return [r, 'Missouri'];
      case 'MT':
        return [r, 'Montana'];
      case 'NY':
        return [r, 'New York'];
      case 'NJ':
        return [r, 'New Jersey'];
      case 'PA':
        return [r, 'Pennsylvania'];
      default:
        return null;
    }
  });

  function createData(abbr, name) {
    return {abbr, name}
  }

  return temp.map((region) => (createData(region[0], region[1])));

}

export default Regions
