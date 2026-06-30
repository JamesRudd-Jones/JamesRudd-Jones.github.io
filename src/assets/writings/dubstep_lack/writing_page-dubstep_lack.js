// src/assets/writings/dubstep_lack/writing_page-dubstep_lack.js
import React from 'react';
import { Row, Column, FullWidth } from '../../projects/ProjectLayout';
import ExpandableImage from '../../projects/ExpandableImage';
// import VideoPlayer from '../VideoPlayer';
import { writingContainer, Emph } from '../writingFonts';

export const dubstepLackMeta = {
  id: '0',
  // title: 'On Dubstep Music, the Sonic Emulation of Large Spaces, and Intrinsic Human Lack',
  title: "Title",
  abstract: 'An intro.',
  link: '/dubstep_lack',
};

const WritingPageDubstepLack = () => {
  return (
    <div>
      <h1>{dubstepLackMeta.title}</h1>

      <FullWidth style={writingContainer}>
        <p>
          Recently, I have noticed that much of the music I enjoy revolves around the emulation of a sonically large space.
          What I mean by this is that the musician through: instrument choices, notes, and production techniques creates a sense of largeness and space. 
          For me, conjuring up images in my mind of a large, dark, cold, damp, empty space; something I am drawn to throughout many a genre.
          Below I have linked songs that evoke this imagery in certain genres: Dubstep, xxx, xxx, xxx
          Yet, I have never been in such a space; why is it something I long for and can create a mental image of, what emotions are attached to such a physical manifestation?
          The largeness and emptiness perhaps being clearer than why dark, cold, and damp as well?
        </p>

        <p>
          With my own journey in psychodynamic therapy and exploring psychanalytic literature (sadly I cannot yet afford a true analysis), I have felt the urge to create in this space and this will be my starting point to 
          use pscyhoanalytic concepts to deepen an understanding of this personal (and perhaps societal) phenomenon.
          As my first piece of non-empirical or quantitatively driven writing given my historical propensity for STEM it may be a messy or unclear read but bare with me.
        </p>

        <p>
          Do I actually want to introduce sublimation or shall I just focus on Lacans definiton of the lack - think this may be better
          some line discussing the ever circling of the lack - think circling is an apt word here again for the general vibe of space in the centre and circling around !
          some line about feels quite apt that one of lacan's main things was lack (although understand in his native french it is manque or something similar so not as fitting ha)
          define lack as lack-of-desire rather than just pure lack as that can be misconstrued as lacking of things perhaps which is not quite right

          I refer primarily to the act of sublimation which has many different definitions and implications depending on the preffered pschyoanalyst of one's choosing.
          At a high level sublimation refers to the transformation of "socially unacceptable" desires or impulses into "socially acceptable" or "productive" behaviours.
          For example, the outpouring of artistic endeavours/overworking after an emotionally turbulent time (maybe not the best example here as vague) or the sublimation of aggression towards others or oneself into more socially 
          acceptable forms such as competitve sports or for me, more so in my younger years, at heavy metal concerts.
        </p>

        <p>
          Onwards from here I focus on the definition of sublimation from the perspective of the French psychoanalyst <Emph>Jacques Lacan</Emph> for this discussion.
          An import concept is that of <Emph>Das Ding</Emph> or termed as <Emph>objet petit a</Emph> by Lacan; both left in their original languages as insisted by Lacan but translated to "the thing" and "object little a" respectively.
          The term stands for an unattainable object of desire that one throughout their life attempts to give meaning to all desired objects around.
          It relates to the feeling of humanity's intrinsic lack, a void we all seek to fill.
          There is much to write about this subject which I will not and cannot cover here; I only include a very high level exposition.
          Perhaps something about how it feels that Freud and Lacan perhaps see sublimation as a good thing whereas avoiding one's true unconcious not so good, idk need to flesh this out a bit and maybe not relevant here
        </p>

        <p>
          For Lacan sublimation is thus an act of transforming objects of desire to somehow attain the same status as his <Emph>objet petit a</Emph>.
          Further, he sees sublimation as the creation out of nothing, giving meaning to an object in relation to xxx.
          Similarly in the ideas of a creative self from Winnicott perhaps that a healthy individual creates life for themselves out of their interactions perhaps.
          Lacan gives examples of this in pottery and architecture: both being ancient practicies that we have always relied on and both an empty or hollow space that one creates around.  
        </p>

        <p>
          All this leads us to back to my first paragraph.
          This sonic space that is created is again a large hollow space.
          For me is this an act of sublimation in the eyes of Lacan?
          What is the meaning of this space, what is the meaning of this desire for such a space?
          It is also not unique, much of the music I enjoy is also enjoyed by many other's.
          some circling of the lack that lacan mentions, some subconscious sublimation perhaps?
        </p>

        <p>
          Further, senses of space incite loneliness and largness perhaps, is this relevant?
        </p>

        <p>
          What is unique and interesting about this musical space to me is twofold: first, can it ever truly be empty to be visualised; second, much of the enjoyment comes from how the space is filled.
          For the former point what I mean is that there is some tension here.
          An artist requires sound to paint the picture of this space yet this in some senses fills up this void.
          Whilst time is left between notes and sounds and balancing this temporal space can also not be empty as the mental picture would fade.
          Perhaps the best songs tread this fine line carefully.
          For the latter too in some way linked, is that many of these songs fill the space with noise and motion, is it perhaps some manic style defence against the emptiness of the void?
          More thoughts to be had here but there is perhaps something more.

          For example, a mere ambient recording of a cave or similar space may not spark that much joy for many, yet appending layers of music can lead to an interesting experience.
          Further, without perhaps the backing of the ambient noise or extended reverb, is the same effect still there?

          For example, maybe use a song example.
        </p>

        <p>
          Thank you for reading my first foray into psychoanalytic writing.
          These words are all my own, yet this topic may have been discussed somewhere else.
          Please reach out for any questions, discussions, or comments!
        </p>

    </FullWidth>

    {/* <FullWidth>  
        real digression - perhaps christain religion sees the first sin/transgession by adam and eve as this answer to the lack we all feel?
        feel like must have been written about before
        but it's like an answer to why we feel this lack, we had the garden of eden and we had it all, and instead we can place our blame on adam and eve for this lack that we feel
        humans forever are trying to fill in and recover from this heavan on earth? will think more about it

        quick google has given the following:
        https://www.qeios.com/read/6V7ACV
        https://deborahjbrasket.com/2014/02/28/thou-art-that-part-iv-some-tragic-falling-off/
        https://medium.com/@marko.kostic97/primordial-guilt-from-the-mirror-to-the-fall-99b6cef32f94
        https://www.gutenberg.org/files/8525/8525-h/8525-h.htm
      </FullWidth> */}

    </div>
  );
};

export default WritingPageDubstepLack;