import * as React from 'react';
import './Home.css';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import {Facebook,Instagram,LinkedIn,Twitter} from "@mui/icons-material"

const theme = createTheme({
  palette: {
    primary: {
      light: green[300],
      main: green[500],
      dark: green[700],
      darker: green[900],
    },
  },
});

const vehicles = [
  {
    label: 'Car',
    value: 'Car'
  },
  {
    label: 'Bike',
    value: 'Bike'
  },
  {
    label: 'Scooter',
    value: 'Scooter'
  },
  {
    label: 'Lorry',
    value: 'Lorry'
  },
  {
    label: 'Truck',
    value: 'Truck'
  },
];
const vservice = [
  {
    label: 'Major service',
    value: 'Major service'
  },
  {
    label: 'Minor service',
    value: 'Minor service'
  },
  {
    label: 'Oil service',
    value: 'Oil service'
  },
];
const vrepair = [
  {
    label: 'AC heating and cooling',
    value: 'AC heating and cooling'
  },
  {
    label: 'Battery services',
    value: 'Battery services'
  },
  {
    label: 'Brake services',
    value: 'Brake services'
  },
  {
    label: 'Electrical',
    value: 'Electrical'
  },
  {
    label: 'Engine',
    value: 'Engine'
  },
  {
    label: 'Tyre, wheels and tracking',
    value: 'Tyre, wheels and tracking'
  },
  {
    label: 'Security, locking and keys',
    value: 'Security, locking and keys'
  },
];
const vwash = [
  {
    label: 'Full wash',
    value: 'Full wash'
  },
  {
    label: 'Steam wash',
    value: 'Steam wash'
  },
  {
    label: 'Interior Detailing',
    value: 'Interior Detailing'
  },
  {
    label: 'Window tinting',
    value: 'Window tinting'
  },
  {
    label: 'Ceramic treatment',
    value: 'Ceramic treatment'
  },
  {
    label: 'AC sanitation',
    value: 'AC sanitation'
  },
];
export default function SvgIconsColor() {
  return (
    <div>
    <Box sx={{ flexGrow: 1, width:"100%"}}>
      <AppBar position="static" style={{backgroundColor: "Darkblue"}}>
        <Toolbar>
        <Grid item xs={2}>
        <BuildCircleIcon/>
      </Grid>
      <h2 style={{colorAdjust: "pink"}}><pre>Booking</pre></h2>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    <AppBar position="static" style={{backgroundColor: "lavender", alignItems: "center"}}>
    <div style={{backgroundColor:'lavender'}}>
      <h1 style={{color: "darkblue", fontStyle: "italic", fontSize: 50}}><u>Welcome to Vehicle Service Booking</u></h1>
      <br></br><br></br><br></br>
        <Box position={'static'} sx={{ flexGrow: 1 ,width:"100%", backgroundColor:'lavender', alignItems:"center"}}>
            <Toolbar style={{backgroundColor:'lavender'}}>
            <Box
          component={"form"}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{color: "white"}}>
            <TextField
              id="outlined-required"
              select
              label="Vehicle"
              defaultValue={""}
            >
              {vehicles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Box>
            <Box
          component={"form"}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{color: "white"}}>
            <TextField
              id="outlined-required"
              select
              label="Service"
              defaultValue={""}
            >
              {vservice.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Box>
            <Box
          component={"form"}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{color: "white"}}>
            <TextField
              id="outlined-required"
              select
              label="Repair"
              defaultValue={""}
            >
              {vrepair.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Box>
            <Box
          component={"form"}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{color: "white"}}>
            <TextField
              id="outlined-required"
              select
              label="Wash"
              defaultValue={""}
              >
              {vwash.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Box>
            </Toolbar>
              </Box>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ThemeProvider theme={theme}>
         <Button variant="contained" sx={{ bgcolor: `primary.dark`, color:'white'}} href='/'>Book</Button>
        </ThemeProvider>
        <br></br>
        <br></br>
    <br></br>
      </div>
    </AppBar>
    <footer>
    <Box sx={{ width: "100%", height: "100%", overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
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
const itemData = [
  {
    img: 'https://www.carkeys.co.uk/media/1083/oil_change.jpg?anchor=center&mode=crop&width=1200&height=800',
    title: 'Oil services',
    author: 'Oil services',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'http://www.carz.in/wp-content/uploads/2016/05/car-wash.jpg',
    title: 'Water wash',
    author: 'Water wash',
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.CoHM-YufhLHwY2zR5m5n6gHaDR&pid=Api&P=0&h=180',
    title: 'Door lock services',
    author: 'Door lock services',
    cols: 2,
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.YuxuTK0PQozvPA2C1L28MQAAAA&pid=Api&P=0&h=180',
    title: 'Stream wash',
    author: 'Stream wash',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.vCkhjus8Dcuwm1esvqErrgHaE8&pid=Api&P=0&h=180',
    title: 'Tyre and brake services',
    author: 'Tyre and brake services',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.Bxw5RyILKX7JB7IobnrUUAHaE8&pid=Api&P=0&h=180',
    title: 'Engine services',
    author: 'Engine services',
    rows: 2,
    cols: 2,
    featured: true,
  },
];