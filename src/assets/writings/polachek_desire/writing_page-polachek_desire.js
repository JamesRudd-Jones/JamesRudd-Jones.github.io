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

          """ 
          "Desire, I Want To Turn Into You” within itself is such a futile endeavour when taken to it’s conclusion: first of all, you cannot become a feeling, and furthermore the feeling you want to become is unobtainable 
          because you are wanting want. And once you have fulfilled that lack, you will no longer desire, thus losing what you wanted to become. It’s this beautiful, heated cyclical passion.

          Which is why i love the title of this song so much. I don’t know if these are portmanteaus she coined herself, or if they are references, but they spell out the idea of “desire, i want to turn into you” so well: being 
          in a state of constant want, literally drunk on hope, and forever asking…so beautiful. "
          """
          reddit quote that feels pretty apt given the idea of this essay, interesting they again use this idea of a cyclical passion - is a sphere again innit

          """
           In the last verse, there's a line suggested but unspoken. In the parallel first verse, in present tense, there are four lines after 'hopedrunk everasking' - culminating in 'pull close to me and never be alone'.

          The final verse only has three lines after hopedrunk everasking, but leaves the perfect amount of timing for the line 'pull close to me and never be alone'. Not including this and ending on 'and yet they won't' is 
          almost more existentially terrifying. 
          """
          Another quote from reddit hey

          https://stuyspec.com/article/when-wanting-isnt-enough
          https://carolinepolachek.fandom.com/wiki/Hopedrunk_Everasking



          discuss the sound of the firealarm and then the hospital beep in coma - is there a link between them to some unconcious coma vibe and the dream state in the tunnel?
        </p>

        <p>
            I hope that two is not enough for a trend, but perhaps the next one will also be music related ha
        </p>

    </FullWidth>

    </div>
  );
};

export default WritingPagePolachekDesire;