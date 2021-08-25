import React, {useEffect, useState} from 'react';
import FriendsContainer from "./components/FriendsContainer";

// import Chandler from './audioclips/Chandler.mp3'
// import Ross from './audioclips/Ross.mp3'
// import Rachel from './audioclips/Rachel.mp3'
// import Monica from './audioclips/Monica.mp3'
// import Mike from './audioclips/Mike.mp3'
// import Joey from './audioclips/Joey.mp3'
// import Janice from './audioclips/Janice.mp3'
// import Gunther from './audioclips/Gunther.mp3'
// import Phoebe from './audioclips/Phoebe.mp3'
import audio from './audioclips/Chandler.mp3'
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


  // const playAudio = () => {
  //   new Audio(audio).play();
  // }
  



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
//     <>
//     <div className="App">

     
//       {/* playAudio={playAudio} */}
    
//         {/* <button onClick={playAudio}>PLAY AUDIO</button> */}

//       <FriendsContainer friends={friends} onAddNewFriend={onAddNewFriend} />
//       <AddFriendContainer onAddNewFriend={onAddNewFriend} />

//     </div>
//    </>
//   );
// }

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
