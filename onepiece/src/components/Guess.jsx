import React from 'react'
import { Box, IconButton, TextField, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container,Icon} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../styles/guess.css';
export const Guess = ({ guesses }) => {
  const character1 = { Name: "Aggie", Debut: "Episode 461", Affiliations: "Spade Pirates", Occupation: "Pirate" };
  const character2 = {
    Name: "Aggie", Debut: "Episode 20", Affiliations: "Straw Hat Pirates,Straw Hat Grand Fleet,Vinsmoke Family (former), Baratie (resigned), Germa Kingdom (defected), Ninja-Pirate-Mink-Samurai Alliance (disbanded)",
    Occupation: "Cook, Pirate, Senior Officer,Sous Chef (former), Prince (former), Cart Vendor (temporary)"
  }

  return (
    <>
      {guesses.map((item, index) => (
        <Grid container direction="row" rowSpacing={3} columnSpacing={7} alignItems={'center'} sx={{color:'white'}} >
          <Grid item className='box' sx={{
            backgroundColor:
              character1.Name === character2.Name ? "success.light"
                : character1.Name.includes(character2) || character2.Name.includes(character1.Name) ? "warning.light"
                  : "error.light"
          }}>
            <Typography gutterBottom paragraph>Character</Typography>
          </Grid>
          <Grid item className='box'
            sx={{
              backgroundColor:
                character2.Name === character1.Name ? "success.light"
                  : character1.Name.includes(character2.Name) || character2.Name.includes(character1.Name) ? "warning.light"
                    : "error.light"
            }}>
            <Typography gutterBottom paragraph >{character1.Name}</Typography>
          </Grid>
          <Grid item xs={2} className='box' sx={{
            position:'relative',
            backgroundColor:
              parseInt(character1.Debut.match(/\d+/)[0], 10) === parseInt(character2.Debut.match(/\d+/)[0], 10)
                ? "success.light": "warning.light",
          }}>
            {parseInt(character1.Debut.match(/\d+/)[0], 10) > parseInt(character2.Debut.match(/\d+/)[0], 10)
            ?<KeyboardArrowDownIcon fontSize='large' sx={{color:'black',opacity:0.3,zIndex:1,position:'absolute'}}/>: 
            parseInt(character1.Debut.match(/\d+/)[0], 10) < parseInt(character2.Debut.match(/\d+/)[0], 10)
            ?<KeyboardArrowUpIcon />: <></>

            }
            <Typography gutterBottom paragraph sx={{zIndex:2,position:'relative'}}>{character1.Debut}</Typography>
          </Grid>
          <Grid item xs={2} className='box' sx={{
            backgroundColor:
              character2.Affiliations === character1.Affiliations ? "success.light"
                : character1.Affiliations.includes(character2.Affiliations) || character2.Affiliations.includes(character1.Affiliations) ? "warning.light"
                  : "error.light"
          }}>
            <Typography gutterBottom paragraph >{character1.Affiliations}</Typography>
          </Grid>
          <Grid item xs={2} className='box' sx={{
            backgroundColor:
              character2.Occupation === character1.Occupation ? "success.light"
                : character1.Occupation.includes(character2.Occupation) || character2.Occupation.includes(character1.Occupation) ? "warning.light"
                  : "error.light"
          }} >
            <Typography gutterBottom paragraph>{character1.Occupation}</Typography>
          </Grid>
        </Grid>

      ))}

    </>
  )
}
