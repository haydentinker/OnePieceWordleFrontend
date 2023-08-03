import React from 'react';
import { Box, IconButton, TextField, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export const GuessHeader = () => {
  return (
    <>          
      <Grid container direction="row" rowSpacing={2} columnSpacing={5} alignItems={'center'}>
        <Grid item xs={2}>
          <Typography align="center">Character</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography align="center">Name</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography align="center">Debut</Typography>
        </Grid> 
        <Grid item xs={2}>
          <Typography align="center">Affiliations</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography align="center">Occupation</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography align="center">Birthday</Typography>
        </Grid>
      </Grid>
    </>
  );
}
