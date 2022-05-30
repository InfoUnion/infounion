import React from 'react'
import { Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button } from '@mui/material'

function NewsArticle ({ data }) {
  return (
    // <div className="news">
    //   <h1 className="news__title">{data.title}</h1>
    //   <p className="news__desc">{data.description}</p>
    //   <span className="news__author">{data.author}</span> <br />
    //   <span className="news__published">{data.publishedAt}</span>
    //   <span className="news__source">{data.source.name}</span>
    // </div>
    <Card sx={{ width: 300, height: 300 }}>
      <CardActionArea
        href={data.url}
        target='_blank'
        rel='noreferrer'
      >
        <CardMedia
          component='img'
          height='125'
          image={data.urlToImage}
          alt='green iguana'
        />
        <CardContent
          height='150'
        >
          <Typography gutterBottom variant='h8' fontWeight='bold' component='div'>
            {data.title}
          </Typography>
          <Typography noWrap variant='body2' color='text.secondary'>
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions
        height='25'
      >
        <Button size='small' color='primary'>
          Share
        </Button>
      </CardActions>

    </Card>
  )
}

export default NewsArticle
