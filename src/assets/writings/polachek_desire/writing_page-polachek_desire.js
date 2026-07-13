// src/assets/writings/polachek_desire/writing_page-polachek_desire.js
import React from 'react';
import { Row, Column, FullWidth } from '../../projects/ProjectLayout';
import ExpandableImage from '../../projects/ExpandableImage';
// import VideoPlayer from '../VideoPlayer';
import { writingContainer, Emph } from '../writingFonts';

export const polachekDesireMeta = {
  id: '1',
  title: 'Desire, I Want To Turn Into You',
  // title: "Title 2",
  abstract: 'A psychoanalytical critique of Caroline Polachek\'s album "Desire, I Want To Turn Into You".',
  link: '/polachek_desire',
};

const WritingPagePolachekDesire = () => {
  return (
    <div>
      <h1>{polachekDesireMeta.title}</h1>

      <FullWidth style={writingContainer}>
        <p>
          Caroline Polachek was introduced to me by my eldest sister, during a turbulet period in my life post a breakup with much time for recuperating and reflecting.
          Caroline has a wide array of musical styles within her work, but for me her ethereal tunes are the ones that I feel most drawn too (including some of her collaborations and features).
          Below I link some of my favourites.
          During this difficult time her song "Hopedrunk Everasking" became my anthem (alongside "what's good - Oklou"), off the album "Desire, I Want To Turn Into You".
          Not only her sonic compositions but her choice of words are very interesting and I feel there are many similar themes to what was discussed in my previous piece on dubstep, desire, and lack.
          So for this musing I will explore a pscyhoanalytical critique of Caroline Polachek focussing on her album "Desire, I Want To Turn Into You".
        </p>

        <p>
          We start with some background which may not be new to you if you are already an avid follower after only one piece but I expound below to be self contained!
          intro lack and desire again and all this good stuff at a high level, perhaps refer to the previous piece but its nice to be self contained.
        </p>

        {/* <p>
          thought pieces for the piece so far:
          the title of album and what it means
          hopedrunk everasking and the meaning of the title but also the song as a whole
          perhaps some of the sonic parts rather than just lyrics for now
          the beeper in hoperdrunk and its relation to coma
          an analysis of coma as well in the lyrics and vibes sonically
          starts with welcome to my island - some play area or perhaps transitional space for us to enter for the whole album, but also an island is so distant and isolated maybe a metaphor baby
        </p> */}

        <p>
          We start with the first point of contact with this album which is the title itself; which sets the scene for the themes everpresent throughout the album.
          Initial point about what it means to become desire, what does that even mean or entail, why would one want to do this?
          Further, the wording itself to me is very interesting; Caroline doesn't say "I want to become you" or anything along those lines but instead <Emph>I want to turn into you</Emph>.
          Harking back to some of the geometric aspects of lack and desire it there is some connection here.
          Turning into to me implies again some circling or orbiting, perhaps around this intrinsic lack and some more words here to explain what I mean; how one would turn into a corner whilst driving for example.
          If we stick with this orbiting analogy, although we are always circling we can never really turn into the object otherwise we are no longer orbiting and instead heading for collision.
          Again this idea of collapsing her orbit into the <Emph>objet petit a</Emph> itself.
          In an orbit you are never turning you are only travelling in a straight line, but the gravtiational pull of the object (small o haha) creates a circular movement.
          Actually turning towards implies a crash or collision, some movement of the periapsis or the other word into a collision course with the surface of the object.
          Also turning into again is into and not outo, although gramatically it has to be into to make any sense as turning outo is not clear, still it evokes some circular turning towards something 
          More here perhaps.
          it's not I want to become you but its the act of turning into, can even have a diagramme here to signify my points hm

          people are afraid of their desires and feeel bound by them so perhaps caroline wants to become it beacuse of some reasons need to think 

          Unlike my previous work I actually did some preliminary research on whether this topic had been discussed before, given how apt the title was, but only came across some following reddit comments.
          It feels a bit sacriligious to cite reddit given all my academic training but alas we are here.

          """ 
          "Desire, I Want To Turn Into You” within itself is such a futile endeavour when taken to it's conclusion: first of all, you cannot become a feeling, and furthermore the feeling you want to become is unobtainable 
          because you are wanting want. And once you have fulfilled that lack, you will no longer desire, thus losing what you wanted to become. It's this beautiful, heated cyclical passion.

          Which is why i love the title of this song so much. I don't know if these are portmanteaus she coined herself, or if they are references, but they spell out the idea of “desire, i want to turn into you” so well: being 
          in a state of constant want, literally drunk on hope, and forever asking…so beautiful. "
          """
          reddit quote that feels pretty apt given the idea of this essay, interesting they again use this idea of a cyclical passion - is a sphere again innit

          Not only spherical but they have basically described Lacan's views on desire without ever referencing his theories.
        </p>

        <p>
          We now turn towards my highlighted song from the album: "Hopedrunk Everasking" (and its kind of cousin "Coma" from the extended edition).
          Again lots to unpack here.

          is jouissance relevant here at all, the ever needing for more, kind of in the title hopedrunk everasking, is that a form of jouissance?

          """
           In the last verse, there's a line suggested but unspoken. In the parallel first verse, in present tense, there are four lines after 'hopedrunk everasking' - culminating in 'pull close to me and never be alone'.

          The final verse only has three lines after hopedrunk everasking, but leaves the perfect amount of timing for the line 'pull close to me and never be alone'. Not including this and ending on 'and yet they won't' is 
          almost more existentially terrifying. 
          """
          Another quote from reddit hey

          https://stuyspec.com/article/when-wanting-isnt-enough
          https://carolinepolachek.fandom.com/wiki/Hopedrunk_Everasking

          discuss the sound of the firealarm and then the hospital beep in coma - is there a link between them to some unconcious coma vibe and the dream state in the tunnel?

          pulling towards again could relate to this orbiting, you know the gravitational pull of the object increases except in this instance she herself is the object of desire or aspires to be.


        </p>

        <p>
          The track opener titled "Welcome to My Island" is also an interesting idea.
          Caroline moves the listener to this space she has created, a playful area and perhaps a transitional space to quote my boy Winnicott.
          In this space are we able to explore in detail our own desires and fantasies in relation to the other or something.
          more here
        </p>

        <p>
          I am sure much more could be said on Caroline Polachek's work but these were the things that spoke most to me.
          Perhaps whatever are the bounds of my <Emph>objet petit a</Emph> are all that I am able to see or what I am drawn to in her music.
          It would be great to hear how Caroline related to you and in relation to the ideas I have put forward here.
          The sample size of two is small, but perhaps the trend will continue for the next one for some musical analysis again, we move ever onwards !!
        </p>

    </FullWidth>

    </div>
  );
};

export default WritingPagePolachekDesire;