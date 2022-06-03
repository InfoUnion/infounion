import { Container, ImageList, ImageListItem, ImageListItemBar, Typography, Link, } from '@mui/material'
import React from 'react'
import './About.css'

const itemData = [
  {
    img: 'https://media-exp1.licdn.com/dms/image/C5603AQFGfHU09VyJrA/profile-displayphoto-shrink_800_800/0/1624164323083?e=1659571200&v=beta&t=zxZ75FhFcSilWWacZ0RaP8dwKXooNAT1l_LK2XlKV3g',
    title: 'Giselle Dougan',
    author: 'https://www.linkedin.com/in/giselle-dougan-166933153/'
  },
  {
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQEXNvKoNb9KCw/profile-displayphoto-shrink_800_800/0/1628024479626?e=1659571200&v=beta&t=9tJMVLVB7ahVjZBsZr3y4-KYnSwMPgiiLwC-Tmyrm1Q',
    title: 'Justin Scabarozi',
    author: 'https://www.linkedin.com/in/justin-scabarozi-620329219/'
  },
  {
    img: 'https://media-exp1.licdn.com/dms/image/C5603AQFBwbnOHBS5gQ/profile-displayphoto-shrink_800_800/0/1627846960874?e=1659571200&v=beta&t=G15XajdeIt4PVPb21DkusCnTSfa46J5PumiRdUTebVI',
    title: 'Kareem Darghous',
    author: 'https://www.linkedin.com/in/kareem-d-35786a109/'
  },
  {
    img: 'https://media-exp1.licdn.com/dms/image/C5603AQErO6o1UoVwzg/profile-displayphoto-shrink_800_800/0/1652917376897?e=1659571200&v=beta&t=z1PgoZysCOw63cNcXSpLRHHtHyJwSAvX0_slL7izbxU',
    title: 'Khoa Ly',
    author: 'https://www.linkedin.com/in/khoaly/'
  },
  {
    img: 'https://media-exp1.licdn.com/dms/image/C5603AQHIzMGiEs5b-Q/profile-displayphoto-shrink_800_800/0/1646552182972?e=1659571200&v=beta&t=hBR1x46K_M465ccO7H1lVcH-Q72aO43NQEZplaHQ1SU',
    title: 'Tomas Prieto',
    author: 'https://www.linkedin.com/in/tom%C3%A1s-prieto-577a44225/'
  }
]

function About() {
  // const Item = styled(Paper)(({ theme }) => ({
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   background: 'transparent',
  // }));

  return (
    <Container maxWidth='xl'>
      <div className='wrapper'>
        <h1>About</h1>
      </div>
      <ImageList sx={{ width: '100%', height: '100%' }} cols={3} rows={2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading='lazy'
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: <a href={item.author} target="_blank">{item.author}</a></span>}
              position='below'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}

export default About
