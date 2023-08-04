import React from 'react'
import { Box, IconButton, TextField, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
export const Guess = ({ guesses }) => {
  const character1 = { Name: "Aggie", Debut: "Episode 461", Affiliations: "Spade Pirates", Occupation: "Pirate" };
  const character2 = {
    Name: "Aggie", Debut: "Episode 20", Affiliations: "Straw Hat Pirates,Straw Hat Grand Fleet,Vinsmoke Family (former), Baratie (resigned), Germa Kingdom (defected), Ninja-Pirate-Mink-Samurai Alliance (disbanded)",
    Occupation: "Cook, Pirate, Senior Officer,Sous Chef (former), Prince (former), Cart Vendor (temporary)"
  }

  return (
    <>
      {guesses.map((item, index) => (
        <Grid container direction="row" rowSpacing={2} columnSpacing={5} alignItems={'center'}>
          <Grid item xs={2} color="primary.light">
            <Typography sx={{
              backgroundColor:
                character1 === character2 ? "success.light"
                  : character1.Name.includes(character2) || character2.Name.includes(character1) ? "warning.light"
                    : "error.light"
            }} >Character</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{
              backgroundColor:
                character2.Name === character1.Name ? "success.light"
                  : character1.Name.includes(character2.Name) || character2.Name.includes(character1.Name) ? "warning.light"
                    : "error.light"
            }} >{character1.Name}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{
              backgroundColor:
                character2.Debut === character1.Debut ? "success.light"
                  : character1.Debut.includes(character2.Debut) || character2.Debut.includes(character1.Debut) ? "warning.light"
                    : "error.light"
            }} >{character1.Debut}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{
              backgroundColor:
                character2.Affiliations === character1.Affiliations ? "success.light"
                  : character1.Affiliations.includes(character2.Affiliations) || character2.Affiliations.includes(character1.Affiliations) ? "warning.light"
                    : "error.light"
            }} >{character1.Affiliations}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{
              backgroundColor:
                character2.Occupation === character1.Occupation ? "success.light"
                  : character1.Occupation.includes(character2.Occupation) || character2.Occupation.includes(character1.Occupation) ? "warning.light"
                    : "error.light"
            }} >{character1.Occupation}</Typography>
          </Grid>
        </Grid>

      ))}

    </>
  )
}
