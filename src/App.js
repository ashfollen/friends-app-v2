// import logo from './logo.svg';
// import './App.css';
import React, {useEffect, useState} from 'react';
import FriendsContainer from "./components/FriendsContainer";

function App() {

  const [friends, setFriends] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/friends')
    .then(resp => resp.json())
    .then(friends => setFriends(friends))
  }, [])

  return (
    <div className="App">
      <FriendsContainer friends={friends} />
    </div>
  );
}

export default App;
