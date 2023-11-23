import StateProps from './components/StateProps';
import './App.css';
import { useState } from 'react';
import Props from "./components/Props";

function App() {
  const[name,setName]=useState("Props : Himalini");
  return (
    <div className="App">
   
      <StateProps/>
    </div>
  );
}

export default App;
