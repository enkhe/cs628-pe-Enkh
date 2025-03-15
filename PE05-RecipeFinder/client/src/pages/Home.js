import React from 'react';
import { Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to Recipe Finder
      </Typography>
      <Typography variant="body1">
        Discover, create, and manage your favorite recipes.
      </Typography>
    </Container>
  );
}

export default Home;