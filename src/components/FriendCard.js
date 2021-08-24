import React from 'react';
import Chandler from '../audioclips/Chandler.mp3'


const FriendCard = ({ friend }) => {

  const playAudio = (name) => {
    new Audio(`${name}`).play();
  }
  
  return (
    <div className="friend-column"  >
      <div className="friend-card"
        key={friend.id}
      >
        <div className="image">
          <img alt={friend.name} src={friend.image} />
        </div>
        <div className="content">
          <div className="header">{friend.name}</div>
          <div className="meta text-wrap">
            <small>{friend.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {friend.about}
          </span>
          
          <span>
            <div className="audio">
            <audio controls>
              <source src={Chandler} type="audio/mpeg"/>
            </audio>
              <button id={friend.firstName}
                className="ui mini blue button"
                // onClick={(e) => playAudio(e.target.id)}
              >
               <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
</svg>
              </button>
            
           
              


            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
