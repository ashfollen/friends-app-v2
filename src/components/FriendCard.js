import React, {useState} from 'react';
import Chandler from '../audioclips/Chandler.mp3'
import FriendDetails from './FriendDetails'


const FriendCard = ({ friend }) => {

  const [toggle, setToggle] = useState(false);

  function showDetails () {
    setToggle(!toggle)
  }

  // const playAudio = (name) => {
  //   new Audio(`${name}`).play();
  // }
  
  return (
    <div className="Friends-image">  
        <img alt={friend.name} src={friend.image} 
        onClick={showDetails}
        />
        { toggle ? <FriendDetails friend={friend}  /> : null }
    </div>
      
  );
};

export default FriendCard;
