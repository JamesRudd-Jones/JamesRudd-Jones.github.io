// src/assets/projects/wind_chime_1/project_page-wind_chime_1.js
import React, { useState } from 'react';
import { createPortal } from 'react-dom'; 
import bigOne from './images/big_one.jpg';
import mainPhoto from './images/main_photo.jpg';
import sidebyside from './images/side_by_side.jpg';
import smallOne from './images/small_one.jpg';

const ProjectPageWindChime1 = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const styles = {
    // Container for side-by-side sections
    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start', // Keeps text at the top
      gap: '40px',          // Space between text and image
      marginBottom: '40px',
      width: '100%',
      // flexWrap: 'wrap',     // Allows stacking on mobile TODO do we want this?
    },
    // Base column style
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
    figure: {
      margin: 0, // Reset default browser margins
      width: '100%',
    },
     // Image styling to ensure it fills its container
    image: {
      width: '100%',
      height: 'auto',
      // borderRadius: '4px',
      // border: '1px solid #ccc',
      objectFit: 'cover',
      display: 'block', // Removes bottom gap in some browsers
      cursor: 'zoom-in', 
      transition: 'opacity 0.2s ease-in-out',
    },
    video: {
      width: '100%',
      height: 'auto',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      outline: 'none',
      backgroundColor: '#000', // Good for letterboxing if aspect ratio differs
    },
    caption: {
      marginTop: '8px',
      fontSize: '0.9rem',
      color: '#555',
      fontStyle: 'italic',
      textAlign: 'center', // Or 'left' depending on your preference
    },
    imageHover: {
      opacity: 0.85,
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',       // Full viewport width
      height: '100vh',      // Full viewport height
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark background
      backdropFilter: 'blur(5px)',           // Blurs the blog content behind
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      cursor: 'zoom-out',
    },
    fullImg: {
      maxWidth: '90%',
      maxHeight: '90%',
      borderRadius: '4px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.36)',
    },
    fullWidth: {
      width: '100%',
      marginBottom: '20px'
    }
  }

  // Define the Modal Content
  const modal = selectedImg ? (
    <div style={styles.overlay} onClick={() => setSelectedImg(null)}>
      <img src={selectedImg} alt="Full View" style={styles.fullImg} />
    </div>
  ) : null;

  return (
    <div>
      <h1>Designing and Building Wind Chimes</h1>

      {/* "Portal" sends the modal to the bottom of the HTML <body> so it isn't trapped in layout boxes*/}
      {selectedImg && createPortal(modal, document.body)}

      <div style={styles.row}>
        <div style={{...styles.column, flex: '0 0 30%'}}>
          <figure style={styles.figure}>
            <img 
                src={mainPhoto} 
                alt="Finished Wind Chime" 
                style={styles.image} onClick={() => setSelectedImg(mainPhoto)} 
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'} />
            <figcaption style={styles.caption}>
              A Finished Wind Chime
            </figcaption>
          </figure>
        </div>

        <div style={{...styles.column, flex: '0 0 65%'}}>
          <p >I have a fascination with natural wind based (aka Aeolian) instruments and wind chimes are some of the simplest and most canonical examples. </p>
          <p>For this project, I set out to design and build my own wind chimes from some spare steel tubing that I was given. The choice of material, tubing diameter, and 
            wall thickness have a great effect on the resultant sound, but since I had access to free materials it was set for me! In future projects I would like to experiment
            with variations on these parameters.
          </p>
          <p> The following resource is a great reference for designing and building many variations of wind chimes, it was great help for this project and I would highly
            recommend checking it out: <a href="https://leehite.org/Chimes.htm" target="_blank" rel="noopener noreferrer"> Chime Design and Build</a>.
          </p>
        </div>
      </div>

      <div style={styles.fullWidth}>
        <h2>Calculating Pipe Lengths</h2>
        <p> The first step is selecting the desired notes for the wind chime. Wind chimes typically have 6 tubes and thus use a pentatonic scale. However, the only limitation here
          is your desire and ideas. As my first attempt, I chose two minor pentatonic scales for a high and low register.
        </p>
        <p>
          There are some great wind chime length calculators on the aformentioned linked resource page. For this project, due to material limitations, and just as a fun side project, 
          I programmed my only wind chime calculator that could also output a cutting guide to work within the material lengths that I had. This is a classical <a href="https://en.wikipedia.org/wiki/Bin_packing_problem">bin packing problem</a>.
          The calculator is available on my GitHub here: <a href="https://github.com/JamesRudd-Jones/windchime_length_calc">Wind Chime Length Calculator</a>.
          One can input their material properties, desired notes, and given material lengths. Further, one can decide if they want the exact scale, or the highest or lowest possible octave
          of the given scale to fit the material lengths (as a fun added extra).
        </p>
        <p>
          For clarity, the app outputs the hole placement from the top of the tube, but this measures to the top of the hole and not the hole centrepoint! This is due to lining up one
          of the harmonic frequency modes with the suspension point (which is not the hole centrepoint)!
        </p>

        <h2>The Build Begins</h2>
        <p>
          Given the calculated lengths, the angle grinder and drill came out to cut the tubes to length and the necessary holes for hanging (including deburring to prevent abrasion).
          The wooden hanger was arbitrarily chosen about what looked "correct". Initially garden twine was used but quickly degraded in the weather so replaced with fishing line.
          Since the tubes are steel, I have for now coated with oil to reduce corrosion!
        </p>
        <p>
          The output wind chime lengths include some extra cutting tolerance as accuracy with an angle grinder is limited. Ideally one can refine the note using a method to measure the sound
          frequency at the same time as filing the tube shorter. I found this very challenging as the multiple resonant frequencies from the chime confused the apps I used to measure. I tuned to
          ear as best I could!
        </p>
        <p>
          Below are some photos of the two wind chimes I built, choosing your own scales and designs can lead to many variations and really taps into ones own creativity!
        </p>
      </div>

      <div style={styles.row}>
        <div style={{...styles.column, flex: '0 0 30%'}}>
          <figure style={styles.figure}>
            <img 
                src={smallOne} 
                alt="The Smaller One" 
                style={styles.image} onClick={() => setSelectedImg(smallOne)} 
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'} />
            <figcaption style={styles.caption}>
              The Smaller One (the notes I forgot!)
            </figcaption>
          </figure>
        </div>

        <div style={{...styles.column, flex: '0 0 30%'}}>
          <figure style={styles.figure}>
            <img 
                src={sidebyside} 
                alt="Side by Side Comparison" 
                style={styles.image} onClick={() => setSelectedImg(sidebyside)} 
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'} />
            <figcaption style={styles.caption}>
              A Side by Side Comparison
            </figcaption>
          </figure>
        </div>

        <div style={{...styles.column, flex: '0 0 30%'}}>
            <figure style={styles.figure}>
              <img 
                  src={bigOne} 
                  alt="The Larger One" 
                  style={styles.image} onClick={() => setSelectedImg(bigOne)} 
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'} />
              <figcaption style={styles.caption}>
                The Larger One (the notes are C#3, D3, E3, F3, G3, C4)
              </figcaption>
            </figure>
          </div>

      </div>
    
      <div style={styles.row}>
        <div style={{...styles.column, flex: '0 0 65%'}}>
          <h2 style={{marginTop: '0'}}> Some Later Updates</h2>
          <p style={{marginTop: '0'}}>
            I kept the smaller wind chime indoors and the larger one outdoors. The larger one has held up okay against the weather but required replenishment of the wood oil and chime
            coatings. I plan to blue the steel to further reduce the impact of the elements.
          </p>

          <p>
            For the indoor one I added some cut class orbs for some extra light and sound impact (as seen in the original image). Not only do they now emit nice textured light patters in the evening light but the glass
            orbs also impact the chimes with certain wind gusts acting polyphonic tones and notes to the overall effect.
          </p>
          <p>
            This project is a great fairly straightforward project for anyone interestd in Aeolian instruments. 
            For me, with loads of spare tubes left, there is much more space for exploration of different design parameters!! Perhaps more will be featured on my website in months to come.
          </p>
  
        </div>
        
        <div style={{...styles.column, flex: '0 0 30%'}}>
          <figure style={styles.figure}>
            <video style={styles.video} controls>
              <source src="https://github.com/JamesRudd-Jones/JamesRudd-Jones.github.io/releases/download/v1.0-assets/big_one_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <figcaption style={styles.caption}>
              A Video of the Larger Wind Chime in Action!
            </figcaption>
          </figure>
        </div>

      </div>      

    </div>
  );
};

export default ProjectPageWindChime1;