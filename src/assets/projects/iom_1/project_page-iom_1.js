// src/assets/projects/iom_1/project_page-iom_1.js
import React, { useState } from 'react';
import { createPortal } from 'react-dom'; 
import mainPhoto from './images/main_pic.jpg';

const ProjectPageInternationalOneMetre1 = () => {
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
      <h1>Building a Wooden International One Metre Remote Control Yacht</h1>

      {/* "Portal" sends the modal to the bottom of the HTML <body> so it isn't trapped in layout boxes*/}
      {selectedImg && createPortal(modal, document.body)}    

      <div style={styles.row}>
        <div style={{...styles.column, flex: '0 0 30%'}}>
          <figure style={styles.figure}>
            <img 
                src={mainPhoto} 
                alt="The Outer Fibreglassed Hull" 
                style={styles.image} onClick={() => setSelectedImg(mainPhoto)} 
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'} />
            <figcaption style={styles.caption}>
              The Outer Fibreglassed Hull
            </figcaption>
          </figure>
        </div>

        <div style={{...styles.column, flex: '0 0 65%'}}>
          <p style={{marginTop: '0'}}>
            I love sailing and I especially love wooden boats. Unfortunately, living in a flat in London on a student salary prevents me from having a garage or real workshop space for
            the time being. Wanting to still pursue my desire and learn some wooden boat building skills in the interim, I have scaled down my boat expectations considerably, and 
            hopefully with a scaled down cost too.
          </p>
          <p>
            The <a href="https://en.wikipedia.org/wiki/One_Metre" target="_blank" rel="noopener noreferrer">International One Metre </a> is a world renowned class of remote control (RC) 
            sailing yacht that is raced competitively around the world. Whilst I don't see my future in RC yacht racing, due to its prevelance, there is a wealth of information and 
            resources available online for free for the home builder. 
          </p>
          <p>
            The output of this project will undoubtedly not be a competitive racer but rather a learning experience in wooden boat building and hopefully a fun little boat to sail 
            around ponds and canals, and at the very least a nice wall decoration.
            I have yet to even check if Regents canal has enough depth for the keel!
          </p>
        </div>
      </div>

      <div style={styles.fullWidth}>
        <h2>Choosing and Design, Materials, and Tools</h2>

        <p>
          There are many good designs to be found online, each with their own pros and cons. I ended up choosing the  
          <a href="https://www.frankrusselldesign.com/plans/iom/" target="_blank" rel="noopener noreferrer"> Aeon</a> as it looked like an interesting modern design, and purchasing the design
          drawings included a laser cuttable sheet of shadows to plank around. Saving some time in having to make and hand cut them myself.
        </p>

        {/* <p> */}
          {/* where get materials from and why them
          https://cedar-strip.co.uk/model_boats.html#content6-ay
          nice section that had some knurling on one half of each plank which have "mostly" aligned to have a nice effect
          3mm x 10mm x 1200mm */}
        {/* </p> */}

        {/* <p> */}
          {/* what tools did I get and why  */}
        {/* </p> */}

      </div>
      

      {/* initial build steps and issues along the way */}


    </div>
  );
};

export default ProjectPageInternationalOneMetre1;