import { Container, ImageList, ImageListItem, ImageListItemBar, } from '@mui/material';
import React from 'react';
import './About.css';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1565299715199-866c917206bb',
    title: 'Giselle Dougan',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Justin Scabarozi',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1602968407815-5963b28c66af',
    title: 'Kareem Darghous',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1614045959735-6f9dc28cb994',
    title: 'Khoa Ly',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1515592505566-64d3ee6c1e83',
    title: 'Tomas Prieto',
    author: '@hjrc33',
  },
]

function About() {

  // const Item = styled(Paper)(({ theme }) => ({
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   background: 'transparent',
  // }));

  return (
    <Container maxWidth="xl">
      <div className="wrapper">
        <h1>About</h1>
      </div>
      <ImageList sx={{ width: '100%', height: '100%' }} cols={3} rows={2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=600&h=600&fit=crop&auto=format`}
              srcSet={`${item.img}?w=600&h=600&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

export default About;