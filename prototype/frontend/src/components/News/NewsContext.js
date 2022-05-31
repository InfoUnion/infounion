import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
  const [data, setData] = useState()
  const apiKey = '2f78458c224445cea7e8c6cb46bf367a'

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=unions+NOT+"credit+unions"+Amazon&sortBy=popularity&pageSize=100&apiKey=${apiKey}`
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
