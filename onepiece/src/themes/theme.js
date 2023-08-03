import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#f50057', // Change this to your desired background color
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
    spacing: 8,
  });
  
  export default theme;
  