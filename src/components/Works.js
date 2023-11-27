import * as React from 'react';
import './Home.css';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import {Facebook,Instagram,LinkedIn,Twitter} from "@mui/icons-material";
export default function SvgIconsColor() {
  return (
    <div>
    <Box sx={{ flexGrow: 1, width:"100%"}}>
      <AppBar position="static" style={{backgroundColor: "Darkblue"}}>
        <Toolbar>
        <Grid item xs={2}>
        <BuildCircleIcon/>
      </Grid>
      <h2 style={{colorAdjust: "pink"}}><pre> Vehicle Service</pre></h2>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button color="inherit" variant="outlined" href="/">Back to Home</Button>
          <pre> </pre>
        </Toolbar>
      </AppBar>
    </Box>

    <div className='Home'>
      <h1 style={{color: "white", fontStyle: "italic", fontSize: 50}}><u>HOW IT WORKS</u></h1>
      <br></br><br></br><br></br>
      <Container sx={{width: '80ch'}}> 
    <Paper elevation={3} sx={{
      display: 'flex',
      padding: 2,
      flexDirection: 'column',
      alignItems: 'center',
      background: 'transparent'
    }}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
       <div style={{color:"white" , fontSize: 35 }}>
        
         <h5>Owners of vehicles can avoid unforeseen car problems by maintaining their vehicles regularly. Early detection of vehicle concerns is crucial to preventing them from developing into serious difficulties. Owners of vehicles frequently inquire about service at auto shops. Vehicle technicians examine crucial parts of the vehicle and fix problems to make sure they are in good condition and won't break down suddenly. The study was carried out by the researchers to evaluate the everyday activities and transactions carried out in auto repair facilities. The researchers gathered preliminary data and discovered that the majority of auto repair companies or garages still handle their daily transactions manually. Customer records are still entered manually, as are transactions with clients, tracking of vehicle repairs as they are made, updates on vehicle services, and billing. The functioning of the garage and the response time to client inquiries will be slowed by the ongoing usage of manual procedures. The researchers have identified a need to modernize how auto repair shops work. Customers and car garages will both profit from the system's installation. Utilizing the technology to run the company will help car garages expand and improve operational efficiency. Customers may do business for car service easily and comfortably.</h5>
        </div>
    </Box>
    </Paper>
    </Container>
    <br></br>
      </div>
    <footer>

    <br></br>
    <Box
      component="footer"
      sx={{
        backgroundColor: "lavender"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <LinkedIn />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
      </footer>
      </div>
  );
}