import React from 'react'
import { Box,IconButton, TextField, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
export const Guess = ({guesses}) => {
  return (
    <>          
                {guesses.map((item,index)=>(
                <Grid container direction="row" rowSpacing={2} columnSpacing={5} alignItems={'center'}>
                <Grid item xs={2}>
                <Typography textAlign={"center"}>Character</Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography>Name</Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography>Debut</Typography>
                </Grid> 
                <Grid item xs={2}>
                <Typography>Affiliations</Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography>Occupation</Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography>Birthday</Typography>
                </Grid>
                </Grid>
        
                ))}
                
    </>
  )
}
