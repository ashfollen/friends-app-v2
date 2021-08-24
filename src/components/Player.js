import React, {useEffect, useState} from "react"


const Player = ({ friend }) => {
  const [playing, toggle] = useAudio(friend.audio);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;
