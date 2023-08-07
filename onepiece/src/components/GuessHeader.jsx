import React from 'react'
import { Box, IconButton, TextField, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
export const GuessHeader = () => {
  return (
    <>
      <Grid container direction="row" columnSpacing={10} color={'white'}>
        <Grid item >
          <Typography sx={{ textDecoration: 'underline' }} variant='h5'>Character</Typography>
        </Grid>
        <Grid item >
          <Typography sx={{ textDecoration: 'underline' }}variant='h5' >Name</Typography>
        </Grid>
        <Grid item >
          <Typography sx={{ textDecoration: 'underline' }} variant='h5' >Debut</Typography>
        </Grid>
        <Grid item >
          <Typography sx={{ textDecoration: 'underline' }} variant='h5' >Affiliations</Typography>
        </Grid>
        <Grid item >
          <Typography sx={{ textDecoration: 'underline' }} variant='h5'>Occupation</Typography>
        </Grid>
      </Grid>



    </>
  )
}
