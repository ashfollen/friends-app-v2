import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';

function App() {

  useEffect(() => {
    fetch('http://localhost:3000/friends')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      hello! - testing App v2
    </div>
  );
}

export default App;
