import React from "react";

import CardMusic from "./CardMusic";

import image1 from "/assets/chill-cover.svg";
import image2 from "/assets/forest-cover.svg";
import image3 from "/assets/library-cover.svg";
import image4 from "/assets/meditate-cover.svg";
import image5 from "/assets/night-cover.svg";
import image6 from "/assets/ocean-cover.svg";
import image7 from "/assets/rain-cover.svg";
import image8 from "/assets/study-cover.svg";
import image9 from "/assets/urban-cover.svg";

const Main = () => {
  return (
    <main className="pt-20 px-8">
      <div className="text-white text-center text-4xl lg:text-5xl font-bold my-10">
        <span className="before1">relax.</span>
        <span className="before2">chill.</span>
        <span className="before3">code.</span>
      </div>
      <div className="max-w-[940px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        <CardMusic
          image={image1}
          music="https://cdn.pixabay.com/download/audio/2023/01/01/audio_816821e627.mp3?filename=relaxed-vlog-131746.mp3.mp3"
        />
        <CardMusic
          image={image2}
          music="https://cdn.pixabay.com/download/audio/2021/08/09/audio_6b294070f5.mp3?filename=forest-with-small-river-birds-and-nature-field-recording-6735.mp3"
        />
        <CardMusic
          image={image3}
          music="https://cdn.pixabay.com/download/audio/2021/09/06/audio_8c5b16b7b6.mp3?filename=crackling-fireplace-nature-sounds-8012.mp3"
        />
        <CardMusic
          image={image4}
          music="https://cdn.pixabay.com/download/audio/2022/11/11/audio_84306ee149.mp3?filename=please-calm-my-mind-125566.mp3"
        />
        <CardMusic
          image={image5}
          music="https://cdn.pixabay.com/download/audio/2021/09/06/audio_37aad22374.mp3?filename=sandy-beach-calm-waves-water-nature-sounds-8052.mp3"
        />
        <CardMusic
          image={image6}
          music="https://cdn.pixabay.com/download/audio/2021/10/02/audio_488159f25d.mp3?filename=gentle-ocean-waves-breaking-on-beach-a-8946.mp3"
        />
        <CardMusic
          image={image7}
          music="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
        />
        <CardMusic
          image={image8}
          music="https://cdn.pixabay.com/download/audio/2022/05/13/audio_257112ce99.mp3?filename=soft-rain-ambient-111154.mp3"
        />
        <CardMusic
          image={image9}
          music="https://cdn.pixabay.com/download/audio/2022/02/07/audio_967ca5a3ed.mp3?filename=recording-of-busy-new-york-city-street-18289.mp3"
        />
      </div>
    </main>
  );
};

export default Main;
