import React from 'react'
import { Box,IconButton, TextField, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
export const GuessWrapper = ({guesses}) => {
  return (
    <>          <Box sx={{marginTop:'5%',alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Grid container rowSpacing={2} columnSpacing={5}>
                <Grid>
                <Typography>Character</Typography>
                </Grid>
                <Grid>
                <Typography>Name</Typography>
                </Grid>
                <Grid>
                <Typography>Anime Debut</Typography>
                </Grid>
                <Grid>
                <Typography>Affiliations</Typography>
                </Grid>
                <Grid>
                <Typography>Occupation</Typography>
                </Grid>
                <Grid>
                <Typography>Birthday</Typography>
                </Grid>
                </Grid>
                
                </Box>
                <ul>
                  {guesses.map((item,index)=>(
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
    </>
  )
}
