import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import './Login.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      darker: blue[900],
    },
  },
});

export default function FormPropsTextFields() {
  return (
    <div className='Login' >
    <Container sx={{width: '50ch'}}> 
      <Paper elevation={3} sx={{
        display: 'flex',
        padding: 2,
        flexDirection: 'column',
        alignItems: 'center',
        color: 'green',
        background: 'lavender'
      }}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
    
      <h2>Login</h2>
          <TextField
          required
          id="outlined-required"
          label="Email" 
    
          />
          <br></br>
         <TextField
          required
          id="outlined-password-input"
         
          label="Password"
          />
        <br></br>
        <FormGroup style={{color:"gray"}} >
      <FormControlLabel control={<Checkbox defaultChecked color="default"/> } label="Remember me" />
      
    </FormGroup>
        <br></br>
        <ThemeProvider theme={theme}>
         <Button variant="contained" type="Submit" sx={{ bgcolor: `primary.darker`, color:'white'}} href='/'>Login</Button>
        <br></br>
        </ThemeProvider>
        <Button variant='text' href="/registration"><pre><u>Don't have an account</u></pre></Button>
      </div>
    </Box>
    </Paper>
    </Container>
    </div>
  );
}

