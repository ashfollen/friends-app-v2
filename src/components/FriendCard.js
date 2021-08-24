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
               
              </button>
            


            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
