import React, {useState} from 'react'
import Person from './Person'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [show, setShow] = useState(false);
  const Visibilit√©=()=>{
    setShow(!show);
    console.log(show);
  }
  
  return (
    <div className="App">
      <h1>Profil Person</h1>
      <button type="button" className="btn btn-lg btn-primary" onClick={Visibilit√©}>
        {show ? 'Hide Person' : 'Show Person'}
      </button>
     { show && <Person/> }
     
    </div>
  );
}

export default App;
