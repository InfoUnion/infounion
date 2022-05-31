import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
  const [data, setData] = useState()
  const apiKey = '2f78458c224445cea7e8c6cb46bf367a'
  const loc = (props.loc) ? props.loc : false;
  const loc1 = (loc) ? props.loc[0] : '';
  const loc2 = (loc) ? props.loc[1] : '';

  useEffect((props) => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=unions+NOT+"credit+unions"+
        ${loc1}+${loc2}+&sortBy=popularity&pageSize=100&apiKey=${apiKey}`
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
