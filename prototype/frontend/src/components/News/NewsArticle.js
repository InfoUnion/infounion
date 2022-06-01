import React from "react";
import {
  Card,
  CardActionArea, 
  CardActions, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button, 
  Snackbar,
  
} from '@mui/material';


function NewsArticle({ data }) {
  const [open, setOpen] = React.useState(false);


  const handleShare = () => {
    navigator.clipboard.writeText(data.url);
    setOpen(true);

  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <React.Fragment>
      <Card sx={{ width: 300, height: 300 }}>
        <CardActionArea
          href={data.url}
          target="_blank"
          rel="noreferrer"
        >
          <CardMedia
            component="img"
            height="125"
            image={data.urlToImage}
            alt="green iguana"
          />
          <CardContent
            height="150"
          >
            <Typography gutterBottom variant="h8" fontWeight='bold' component="div">
              {data.title}
            </Typography>
            <Typography noWrap variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions
          height="25"
        >
          <Button size="small" color="primary" onClick={handleShare}>
            Share
          </Button>
        </CardActions>

      </Card>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Link copied"
      />
    </React.Fragment>
  );
}

export default NewsArticle;