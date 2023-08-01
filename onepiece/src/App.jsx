import {React,useState} from 'react'
import { IconButton, TextField, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
export const App = () => {
  const [guesses,setGuesses]=useState([]);
  const [inputValue,setInputValue]=useState('');

  const handleInputChange =(event)=>{
    setInputValue(event.target.value);
  }
  const submitGuess =()=>{
    setGuesses([...guesses,inputValue]);
    setInputValue('');
  }
  return (
    <>
      <CssBaseline />
     
      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography variant="h1" align="center" color="textPrimary" wrap gutterBottom style={{ width: "100%", whiteSpace: 'nowrap' }}>
              One Piece-dle
            </Typography>
            <Typography variant='h5' align="center" color='textSecondary' paragraph>
              Guess today's One Piece character!
            </Typography>
            <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
              <TextField value={inputValue} id="outlined-basic" placeholder="Type character name" variant="outlined" size='large' onChange={handleInputChange}
              InputProps={{
                endAdornment:(
                  <IconButton onClick={submitGuess}> <ArrowForwardIosOutlinedIcon /></IconButton>
                )
              }}/>
              
              
            </div >
            {guesses &&(
                <>
                <Typography align='center'>Guesses</Typography>
                <ul>
                  {guesses.map((item,index)=>(
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                </>
              )}
          </Container>
        </div>
      </main>
    </>
  )
}
