import React, { useState } from 'react';
import './App.css';

import Header from './header'

function App() {
  const [counter, setCounter] = useState(0);

  function handlerClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title="Hello World" />

      <h1>{counter}</h1>
      <button type="button" onClick={handlerClick}>Aumentar</button>
    </div>
  );
}

export default App;
