import React, { useRef, useState } from "react";

const CardMusic = (props) => {
  const [isPlay, setIsPlay] = useState(false);
  const playAudio = useRef();

  const play = () => {
    setIsPlay(!isPlay);
    if (!isPlay) {
      playAudio.current.play();
    } else {
      playAudio.current.pause();
    }
  };

  return (
    <div
      className={`${
        isPlay ? "scale-105 shadow-md shadow-green-500" : ""
      } cursor-pointer rounded-3xl w-[300px] h-[260px] mx-auto overflow-hidden duration-200`}
      onClick={play}
    >
      <div className="relative z-[-1]">
        <img src={props.image} alt="" />
      </div>
      <audio src={props.music} loop ref={playAudio}></audio>
    </div>
  );
};

export default CardMusic;
