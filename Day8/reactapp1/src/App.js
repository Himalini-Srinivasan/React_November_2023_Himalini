import './App.css';
import React from "react";
import { Counter } from './components/Counter';
import {Provider} from "react-redux";
import store from './components/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  );
}

export default App;
