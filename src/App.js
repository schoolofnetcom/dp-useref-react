import React, { useRef } from 'react';
import './App.css';

function App() {
  const myInput = useRef(null);
  return (
    <div>
      <input ref={myInput} type="text" />
      <button type="button" onClick={ () => myInput.current.focus() }>Click to focus</button>
    </div>
  );
}

export default App;
