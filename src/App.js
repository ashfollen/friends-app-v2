import React, {useEffect, useState} from 'react';
import FriendsContainer from "./components/FriendsContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddFriendContainer from "./components/AddFriendContainer";
import Home from './components/Home';


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

    <Router>
      <div className="App">
        <nav className="nav">
              <h2 className="bluelink"><Link to="/">Home</Link></h2>
              <h2 className="redlink"><Link to="/friends">Friends</Link></h2>
              <h2 className="yellowlink"><Link to="/add">Add friends</Link></h2>    
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/friends">
            <FriendsContainer friends={friends} onAddNewFriend={onAddNewFriend}  />
          </Route>
          <Route path="/add">
            <AddFriendContainer onAddNewFriend={onAddNewFriend} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
