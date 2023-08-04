import React from 'react'
import { Box,IconButton, TextField, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
export const GuessHeader = () => {
  return (
    <>          
                <Grid container direction="row" rowSpacing={2} columnSpacing={5}>
                <Grid item xs={2}>
                <Typography sx={{textDecoration:'underline' }}paragraph>Character</Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography sx={{textDecoration:'underline' }}paragraph >Name</Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography sx={{textDecoration:'underline' }}paragraph >Debut</Typography>
                </Grid> 
                <Grid item xs={2}>
                <Typography sx={{textDecoration:'underline' }}paragraph >Affiliations</Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography sx={{textDecoration:'underline' }}paragraph>Occupation</Typography>
                </Grid>
                </Grid>
        
               
                
    </>
  )
}
