// src/assets/writings/polachek_desire/writing_page-polachek_desire.js
import React from 'react';
import { Row, Column, FullWidth } from '../../projects/ProjectLayout';
import ExpandableImage from '../../projects/ExpandableImage';
// import VideoPlayer from '../VideoPlayer';
import { writingContainer, Emph } from '../writingFonts';

export const polachekDesireMeta = {
  id: '1',
  // title: 'Desire, I want to turn into you',
  title: "Title 2",
  abstract: 'An intro.',
  link: '/polachek_desire',
};

const WritingPagePolachekDesire = () => {
  return (
    <div>
      <h1>{polachekDesireMeta.title}</h1>

      <FullWidth style={writingContainer}>
        <p>
          Caroline Polachek I am a fan, especially her ethereal tunes they are the best.
          For me one of my big last breakup songs was "Hopedrunk Everasking", link it.
          At a high level her lyrics have meaning, especially her album titles are interesting too.
          In this musing I will cover a pscyhoanalytical critique of her, and especially my fave song with its follow up Coma link this as well as other bits

          perhaps again is turn into some turning towards or some circling again of the lack ? 
          it's not I want to become you but its the act of turning into, can even have a diagramme here to signify my points hm
        </p>

        <p>
            I hope that two is not enough for a trend, but perhaps the next one will also be music related ha
        </p>

    </FullWidth>

    </div>
  );
};

export default WritingPagePolachekDesire;