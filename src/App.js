// import logo from './logo.svg';
// import './App.css';
import React, {useEffect, useState} from 'react';
import FriendsContainer from "./components/FriendsContainer";
import AddFriendContainer from "./components/AddFriendContainer";

function App() {

  const [friends, setFriends] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/friends')
    .then(resp => resp.json())
    .then(friends => setFriends(friends))
  }, [])

  function onAddNewFriend(newFriend) {
    const updatedFriends = [...friends, newFriend]
    setFriends(updatedFriends)
  }

  return (
    <div className="App">
      <FriendsContainer friends={friends} onAddNewFriend={onAddNewFriend} />
      <AddFriendContainer onAddNewFriend={onAddNewFriend} />
    </div>
  );
}

export default App;
