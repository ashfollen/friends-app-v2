

import React from 'react';
import Player from "./Player"
import UseAudio from './UseAudio';

const FriendCard = ({ friend }) => {
  return (
    <div className="friend-column">
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
            {/* <i className="icon dollar" /> */}
            {/* <i class="cil-mic-alt"></i> */}
            {friend.audio}
          </span>
          
          <span>
            <div className="ui center aligned segment basic">
            {/* <i class="cil-mic-alt" /> */}
              {/* <button
                className="ui mini blue button"
                onClick={(e) => {
                  e.stopPropagation();
                  // dischargeBill(friend.id)

                
                 
                }}
              >
               PLAY
               
              </button> */}
            
              {/* <UseAudio friend={friend}  />  */}
              


            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
