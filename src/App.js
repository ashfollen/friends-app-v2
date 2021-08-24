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

  return (
    <>
    <div className="App">
      <FriendsContainer friends={friends}  />
      {/* playAudio={playAudio} */}
    
        {/* <button onClick={playAudio}>PLAY AUDIO</button> */}
    </div>
   </>
  );
}

export default App;
