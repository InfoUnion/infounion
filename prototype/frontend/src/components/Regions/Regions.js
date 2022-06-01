// import React from 'react'

import axios from 'axios'

// function Regions() {
// const [temp, setTemp] = React.useState([]);
// const [regions, setRegions] = React.useState([])
async function states() {
  try {
    const response = await axios.get('http://localhost:4000/states')
    console.log(response);
    return response
  } catch (error) {
    // We're not handling errors. Just logging into the console.
    console.log(error)
    return false
  }
}

const convertStates = (async () => {
  let result = await states();
  if (result) {
    // setRegions(result.data)
    let temp = result.data.map((r) => {
      switch (r) {
        case "AL":
          return [r, "Alabama"];

        case "AK":
          return [r, "Alaska"];

        case "AS":
          return [r, "American Samoa"];

        case "AZ":
          return [r, "Arizona"];

        case "AR":
          return [r, "Arkansas"];

        case "CA":
          return [r, "California"];

        case "CO":
          return [r, "Colorado"];

        case "CT":
          return [r, "Connecticut"];

        case "DE":
          return [r, "Delaware"];

        case "DC":
          return [r, "District Of Columbia"];

        case "FM":
          return [r, "Federated States Of Micronesia"];

        case "FL":
          return [r, "Florida"];

        case "GA":
          return [r, "Georgia"];

        case "GU":
          return [r, "Guam"];

        case "HI":
          return [r, "Hawaii"];

        case "ID":
          return [r, "Idaho"];

        case "IL":
          return [r, "Illinois"];

        case "IN":
          return [r, "Indiana"];

        case "IA":
          return [r, "Iowa"];

        case "KS":
          return [r, "Kansas"];

        case "KY":
          return [r, "Kentucky"];

        case "LA":
          return [r, "Louisiana"];

        case "ME":
          return [r, "Maine"];

        case "MH":
          return [r, "Marshall Islands"];

        case "MD":
          return [r, "Maryland"];

        case "MA":
          return [r, "Massachusetts"];

        case "MI":
          return [r, "Michigan"];

        case "MN":
          return [r, "Minnesota"];

        case "MS":
          return [r, "Mississippi"];

        case "MO":
          return [r, "Missouri"];

        case "MT":
          return [r, "Montana"];

        case "NE":
          return [r, "Nebraska"];

        case "NV":
          return [r, "Nevada"];

        case "NH":
          return [r, "New Hampshire"];

        case "NJ":
          return [r, "New Jersey"];

        case "NM":
          return [r, "New Mexico"];

        case "NY":
          return [r, "New York"];

        case "NC":
          return [r, "North Carolina"];

        case "ND":
          return [r, "North Dakota"];

        case "MP":
          return [r, "Northern Mariana Islands"];

        case "OH":
          return [r, "Ohio"];

        case "OK":
          return [r, "Oklahoma"];

        case "OR":
          return [r, "Oregon"];

        case "PW":
          return [r, "Palau"];

        case "PA":
          return [r, "Pennsylvania"];

        case "PR":
          return [r, "Puerto Rico"];

        case "RI":
          return [r, "Rhode Island"];

        case "SC":
          return [r, "South Carolina"];

        case "SD":
          return [r, "South Dakota"];

        case "TN":
          return [r, "Tennessee"];

        case "TX":
          return [r, "Texas"];

        case "UT":
          return [r, "Utah"];

        case "VT":
          return [r, "Vermont"];

        case "VI":
          return [r, "Virgin Islands"];

        case "VA":
          return [r, "Virginia"];

        case "WA":
          return [r, "Washington"];

        case "WV":
          return [r, "West Virginia"];

        case "WI":
          return [r, "Wisconsin"];

        case "WY":
          return [r, "Wyoming"];
        default:
          return null;
      }
    });
    console.log(temp);
    return temp.map((region) => (createData(region[0], region[1])));
  }
});


function createData(abbr, name) {
  return { abbr, name }
}


// }

export default convertStates;
