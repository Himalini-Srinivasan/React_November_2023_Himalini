import Loginpage from './components/Loginpage';
import Registration from './components/Registration';
import Homepage from './components/Homepage';
import Booking from './components/Booking';
import Works from './components/Works';
import './App.css';
import React from 'react';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/book" element={<Booking/>}/>
        <Route path="/work" element={<Works/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
