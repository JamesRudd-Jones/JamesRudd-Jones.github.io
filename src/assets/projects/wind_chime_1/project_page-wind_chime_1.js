// src/assets/projects/wind_chime_1/project_page-wind_chime_1.js
import React from 'react';
import { Row, Column, FullWidth } from '../ProjectLayout';
import ExpandableImage from '../ExpandableImage';
import VideoPlayer from '../VideoPlayer';

// Media Imports
import bigOne from './images/big_one.jpg';
import mainPhoto from './images/main_photo.jpg';
import sidebyside from './images/side_by_side.jpg';
import smallOne from './images/small_one.jpg';

const ProjectPageWindChime1 = () => {
  return (
    <div>
      <h1>Designing and Building Wind Chimes</h1>

      <Row>
        <Column width="30%">
          <ExpandableImage src={mainPhoto} alt="Finished Wind Chime" caption="A Finished Wind Chime" />
        </Column>
        <Column width="65%">
          <p style={{marginTop: '0'}}>
            I have a fascination with natural wind based (aka Aeolian) instruments; wind chimes are one of the simplest and most canonical examples. 
          </p>

          <p>
            For this project, I set out to design and build my own wind chimes from some spare steel tubing that I was given. The choice of material, tubing diameter, and 
            wall thickness have a great effect on the resultant sound, but utilising free materials meant they were set for me! In future projects I would like to experiment
            with variations on these parameters.
          </p>
          <p> 
            The following resource is a great reference for designing and building many variations of wind chimes, it was a great help for this project and I would highly
            recommend checking it out: <a href="https://leehite.org/Chimes.htm" target="_blank" rel="noopener noreferrer">Chime Design and Build</a>.
          </p>
        </Column>
      </Row>

      <FullWidth>
        <h2>Calculating Pipe Lengths</h2>
        <p> 
          The first step is selecting the desired notes for the wind chime. Wind chimes typically have 6 tubes and thus use a pentatonic scale. However, the only limitation here
          is your desire and ideas. As my first attempt, I chose two minor pentatonic scales of a high and low register.
        </p>
        <p>
          There are some great wind chime length calculators on the aformentioned linked resource page. For this project, due to material limitations, and as a fun side project, 
          I programmed my own wind chime calculator that dervies a cutting guide to work within the material lengths that I had. This is a classic <a href="https://en.wikipedia.org/wiki/Bin_packing_problem" target="_blank" rel="noopener noreferrer">bin packing problem</a>.
          The calculator is available on my GitHub here: <a href="https://github.com/JamesRudd-Jones/windchime_length_calc" target="_blank" rel="noopener noreferrer">Wind Chime Length Calculator</a>.
          A user can input their material properties, desired notes, and given material lengths, and further decide if they want the exact scale, or the highest or lowest possible octave
          of the given scale to fit the material lengths (as a fun added extra).
        </p>
        <p>
          For clarity, the application outputs the hole placement measured from the top of the tube to the top of where the drilled hole should be, not the hole centrepoint! 
          Ideally one should line up the harmonic frequency mode location with the suspension point (which is not the hole centrepoint)!
        </p>
      </FullWidth>


      <FullWidth>
        <h2>The Build Begins</h2>
        <p>
          Given the calculated lengths, the angle grinder and drill came out to cut the tubes to length and the necessary holes for hanging (including deburring to prevent abrasion).
          The wooden hanger was arbitrarily chosen so that it looked "correct?". Initially garden twine was used but quickly degraded in the weather so I have since replaced with fishing line.
          Since the tubes are steel, I have for now coated with oil to reduce corrosion!
        </p>
        <p>
          The calculated wind chime lengths include some extra cutting tolerance as accuracy with an angle grinder is limited. Ideally one can refine the note using a method to measure the sound
          frequency at the same time as filing the tube shorter. I found this very challenging as the multiple resonant frequencies from the chime confused the apps I used to measure. I tuned to
          ear as best I could!
        </p>
        <p>
          Below are photos of the two wind chimes that were built; experimenting with various scales and designs really taps into one's own creativity to create the euphonious tones of one's choosing!
        </p>
      </FullWidth>

      <Row>
        <Column width="30%">
          <ExpandableImage src={smallOne} alt="The Smaller One" caption="The Smaller One (the notes I forgot!)" />
        </Column>
        <Column width="30%">
          <ExpandableImage src={sidebyside} alt="Side by Side" caption="A Side by Side Comparison" />
        </Column>
        <Column width="30%">
          <ExpandableImage src={bigOne} alt="The Larger One" caption="The Larger One (C#3, D3, E3, F3, G3, C4)" />
        </Column>
      </Row>
    
      <Row>
        <Column width="65%">
          <h2 style={{marginTop: '0'}}>Some Later Updates</h2>
          <p style={{marginTop: '0'}}>
            I kept the smaller wind chime indoors and the larger one outdoors. The larger one has for the most part survived the weather but required replenishment of the wood oil and chime
            coatings. I plan to blue the steel to further reduce the impact of the elements.
          </p>

          <p>
            For the indoor one I added some cut glass orbs for extra light and sound impact (as seen in the original image). Not only do they now emit nice textured light patterns in the eventide but the glass
            orbs also impact the chimes with certain wind gusts adding polyphonic notes to the overall effect.
          </p>
          <p>
            This project is a great, fairly straightforward endeavour for anyone interestd in Aeolian instruments. 
            For me, with loads of spare tubes left, there is much more space for exploration of different design parameters!! Perhaps more will be featured on my website in months to come.
          </p>
        </Column>
        <Column width="30%">
          <VideoPlayer 
            src="https://github.com/JamesRudd-Jones/JamesRudd-Jones.github.io/releases/download/v1.0-assets/big_one_video.mp4" 
            caption="The Larger Wind Chime in Action" 
          />
        </Column>
      </Row>      
    </div>
  );
};

export default ProjectPageWindChime1;