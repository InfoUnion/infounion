import React, { useContext } from 'react'
import { Grid, Box } from '@mui/material'
import { NewsContext } from './NewsContext'
import NewsArticle from './NewsArticle'

function News (props) {
  const { data } = useContext(NewsContext)
  // console.log(data)

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      width='100%'
      paddingBottom={2}
    >
      <Grid
        container
        columns={{ xs: 1, sm: 4 }}
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent='center'
        alignItems='center'
        width='100%'
        rowSpacing={2}
      >

        {data
          ? data.articles.map((news) => (
            <Grid item xs={1} key={news.url}>
              <NewsArticle data={news} key={news.url} />
            </Grid>
          ))
          : 'Loading'}
      </Grid>
    </Box>
  )
}

export default News
