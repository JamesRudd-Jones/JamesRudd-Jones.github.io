// src/assets/music/whats_good_piano/music_page-whats_good_piano.js
import React from 'react';
import { Row, Column, FullWidth } from '../../projects/ProjectLayout';
// import ExpandableImage from '../../projects/ExpandableImage';
// import VideoPlayer from '../VideoPlayer';

export const whatsgoodPianoMeta = {
  id: '0',
  title: "what's good - Oklou; Piano Cover",
  abstract: 'Video of piano cover and sheet music.',
  link: '/whats_good_piano',
};

const MusicPageWhatsGoodPiano = () => {
  return (
    <div>
      <h1>{whatsgoodPianoMeta.title}</h1>

      <FullWidth>
        <p>
          Words.
        </p>
    </FullWidth>

    </div>
  );
};

export default MusicPageWhatsGoodPiano;