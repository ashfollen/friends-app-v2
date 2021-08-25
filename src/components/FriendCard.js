import React, {useState} from 'react';
import FriendDetails from './FriendDetails'


const FriendCard = ({ friend }) => {

  const [toggle, setToggle] = useState(false);

  function showDetails () {
    setToggle(!toggle)
  }

 
  
  return (
    <div className="friend-image">  
        <img alt={friend.name} src={friend.image} 
        onClick={showDetails}
        />
        { toggle ? <FriendDetails friend={friend}  /> : null }
    </div>
      
  );
};

export default FriendCard;
