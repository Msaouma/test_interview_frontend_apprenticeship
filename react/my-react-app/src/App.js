import React from 'react';
import Greeting from './Components/Greeting/Greeting';
import Counter from './Components/Counter/Counter';
import NameList from './Components/NamesList/NameList';

import './App.css';

const names = ['Alice', 'Bob', 'Charlie', 'David']; 

function App() {
  return (
    <div className="App">
      <Greeting name="Michel SAOUMA" />
      <Counter />
      <NameList names={names} />
    </div>
  );
}

export default App;
