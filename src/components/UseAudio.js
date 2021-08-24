import React, {useEffect, useState} from "react"
import Player from "./Player"


export default function UseAudio({friend}) {
  const [audio] = useState(new Audio(friend.audio));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return (
    <Div>
      <Player friend={friend} />

      [playing, toggle];
    </Div>
  )};
