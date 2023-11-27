import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import './Register.css'
import { Container } from '@mui/material';

export default function FormPropsTextFields() {
  return (
    <div className='Register'>
    <Container sx={{width: '50ch'}}> 
      <Paper elevation={3} sx={{
        display: 'flex',
        padding: 2,
        flexDirection: 'column',
        alignItems: 'center',
        color: 'dimgrey',
        background: 'white'
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
      <h2>Registration Form</h2>
      <TextField
      required
      id="demo-helper-text-aligned-no-helper"
      label="First name"
      />
      <TextField
      required
        id="demo-helper-text-aligned-no-helper"
        label="Last name"
      />
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
          type="password"
          />
         <TextField
          required
          id="outlined-password-input"
          label="Confirm password"
          type="password"
          />
         <TextField
          required
          id="outlined-number"
          label="Mobile number"
          />
        <br></br>
        <br></br>
        <Button variant="contained" color='secondary' href='/login'>Register</Button>
        </div>
    </Box>
    </Paper>
    </Container>
    </div>
  );
}

