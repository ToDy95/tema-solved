import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import AutoCounter from './components/autoCounter';
import ManualCounter from './components/manualCounter';
function App() {

  return (
    <div className="App">
      <h1>TEMA</h1>
      <AutoCounter />
      <ManualCounter />
    </div>
  );
}

export default App;
