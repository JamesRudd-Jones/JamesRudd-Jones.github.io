// src/components/Musics.js
import React from 'react';
import { allMusics } from "../assets/music/musicData";
import MusicItem from './MusicItem';

const Musics = () => {
  return (
    <div>
      <h1>Music</h1>

      <p>
        {/* Some personal musings. */}
      </p>

      <div>
        {allMusics.map((indmusic) => (
          <MusicItem
            key={indmusic.id}
            indmusic={indmusic}
          />
        ))}
      </div>

    </div>
    
  );
};

export default Musics;