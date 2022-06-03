import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const {u_loc} = props;
  console.log(u_loc && u_loc.length > 0? u_loc[0].name : null)
  const apiKey = '2f78458c224445cea7e8c6cb46bf367a'

  React.useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=unions+${u_loc && u_loc.length > 0 ? u_loc[0].name : ""}+NOT+"credit+unions"+&sortBy=popularity&pageSize=100&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  )
}
