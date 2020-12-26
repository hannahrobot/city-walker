import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio("./music/E-Saggila-Aziza.wav"));
  const [playing, setPlaying] = useState(false);
  audio.volume = 0.2;
  audio.loop = true;
  const toggle = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    const initialAudio = function (event) {
      toggle();
      window.removeEventListener("click", initialAudio, false);
    };
    window.addEventListener("click", initialAudio, false);

    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);
  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div id="audio-player">
      <button id="audio-button" onClick={toggle}>
        <img src="./icon/audio.png" alt="play-audio-icon" />
      </button>
      {playing && (
        <div id="song-info">
          <h3>Aziza</h3>
          <h4>E-Saggila</h4>
        </div>
      )}
    </div>
  );
};

export default Player;
