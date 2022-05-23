import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Box, Stack, Button, Typography, TextField, } from '@mui/material';

import Comments from "./Comments";
import './Union.css';


function Union() {
  const location = useLocation();
  const { u } = location.state;

  useEffect(() => { console.log(u) }, [u]);

  const { comments, setComments } = useState([]);

  const addComment = (newComment) => {
    setComments(state => [...state, newComment])
  };


  return (
    <Container maxWidth="xl">
      <Stack spacing={2}>
        <Stack direction='row' spacing={2} paddingTop={2}>
          <Typography
            variant='h4'
            fontWeight='bold'
          >
            {u.row.name}
          </Typography>
          <Button
            href={u.row.website[0]}
            target="_blank"
            rel="noreferrer"
          >
            <Typography
              fontWeight='bold'
            >
              Visit
            </Typography>
          </Button>
        </Stack>
        <Typography>
          {u.row.phone ? `Telephone: ${u.row.phone}` : 'Number Not Available'}
        </Typography>
        <Typography>
          {u.row.street ? `Address: ${u.row.street} ${u.row.city}, ${u.row.state} ${u.row.postal}` : 'Address Not Available'}
        </Typography>
        <Typography>
          Founded in {u.row.founded}
        </Typography>
        <Typography>
          Number of Employees: {u.row.numEmp}
        </Typography>
        <Typography>
          Description: {u.row.description}
        </Typography>
        {/* <Typography
          variant='h4'
          fontWeight='bold'
        >
          Comments
        </Typography>
        <TextField
          label='Comment'
          multiline
          rows={3}
        />
        <Button
          onClick={addComment}
        >
          Post
        </Button> */}
        <Comments
          commentsUrl="http://localhost:3004/comments"
          currentUserId="1"
        />
      </Stack>
    </Container >

  );
}

export default Union;