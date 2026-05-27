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
              The Outer Fibreglassed Hull; Note the beautiful knurling towards the fore of the boat.
            </figcaption>
          </figure>
        </div>

        <div style={{...styles.column, flex: '0 0 65%'}}>
          <p style={{marginTop: '0'}}>
            I love sailing and I especially love wooden boats. Unfortunately, living in a flat in London on a student salary prevents me from having a garage or real workshop space for
            the time being. Wanting to still pursue my desire and learn some wooden boat building skills in the interim, I have scaled down my expectations considerably; 
            hopefully with a scaled down cost too!
          </p>
          <p>
            The <a href="https://en.wikipedia.org/wiki/One_Metre" target="_blank" rel="noopener noreferrer">International One Metre </a> is a world renowned class of remote control (RC) 
            sailing yacht that is raced competitively around the world. Whilst I don't see my future in RC yacht racing, due to its prevelance as a class, there is a wealth of information and 
            resources available online for free for the home builder. 
          </p>
          <p>
            The finished boat will undoubtedly not be a competitive racer but rather a learning experience in wooden boat building and hopefully a fun little boat to sail 
            around ponds and canals, and at the very least a nice wall decoration.
            I have yet to even check if Regent's canal has enough depth for the keel !!
          </p>
        </div>
      </div>

      <div style={styles.fullWidth}>
        <h2>Deciding upon a Design, Materials, and Tools</h2>

        <p>
          There are many good designs to be found online, each with their own pros and cons. I ended up choosing the  
          <a href="https://www.frankrusselldesign.com/plans/iom/" target="_blank" rel="noopener noreferrer"> Aeon</a> as it looked like an interesting modern design, and the purchased
          drawings include a file for laser cutting the shadows (the forms to be planked around). Saving much time in having to mark out and hand cut them myself.
        </p>

        <p>
          Finding apt materials was a bit of a challenge, but I stumbled across the following 
          <a href="https://cedar-strip.co.uk/model_boats.html#content6-ay" target="_blank" rel="noopener noreferrer"> website</a> that provides Cedar strip planks sized for model yachts.
          I went for the 3mm x 10mm x 1200mm planks as recommended by XXX add link XXX, and luckily received a set with some beautiful knurling on one half of each plank which I have "mostly" aligned for a nice effect (after I had laid the first plank
          I realised this was the case: the starboard gunwhale is the wrong way around).          
        </p>

        <p>
          Alongside the usual woodworking tooling, these are the specialist tools and materials I used during the project: 
        </p>
        
        <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
              <th>Item</th>
              <th>Online Link (for UK based buyers)</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Model Hand Plane</strong></td>
              <td><a href="https://www.dbsportandscale.com/david-combi-plane-wblades-7602-p.asp" target="_blank" rel="noopener noreferrer">Website</a> </td>
              <td>Essential for tapering the planks.</td>
            </tr>
            <tr>
              <td><strong>Selection of rubber bands, binder clips, and drawing pins</strong></td>
              <td>NA</td>
              <td>Holds planks together upon shadows.</td>
            </tr>
            <tr>
              <td><strong>Alphatic Glue</strong></td>
              <td><a href="https://www.cornwallmodelboats.co.uk/acatalog/CMB-Glue-Pack-for-Building-R-C-Models-CMBGP3.html#SID=2506" target="_blank" rel="noopener noreferrer">Website</a> </td>
              <td>As expected.</td>
            </tr>
            <tr>
              <td><strong>PC-11</strong></td>
              <td><a href="https://pcepoxy.co.uk/products/pc-11-paste-epoxy?_pos=1&_sid=726bc029a&_ss=r" target="_blank" rel="noopener noreferrer">Website</a> </td>
              <td>Waterproof epoxy paste for filleting joins. As used by one of the most calming and informative model yacht youtubers: <a href="https://www.youtube.com/@sailtails2775/videos" target="_blank" rel="noopener noreferrer">sailtails</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={styles.fullWidth}>
        <h2>Building the Form and Planking</h2>

        <p>
          laser cutting the forms and putting together.
          made a mistake in that used wood glue to attach together making it unusable but could use hot glue to make it reusable in some senses.
          sellotaped the edge of each shadow so that the planks would not glue to it
          but didn't place sellotape on the first and last shadow as these would be kept with the boat in some senses
        </p>

        <p>
          started with the gunwhale planks as well as two planks for the keel to give a nice split for the midline (recommended by xxx)
          used hand plane to shave down the planks to fit well, tbh it was a hard form to plank around and in retrospect I did not shave enough down so there was a lot of wrapping of the forms if that makes sense
          led to some challenges with keeping it all together with lots of internal stress, but maybe that adds to the strength? some pre tensile load ha
          led to a buckle though
          and also thin sections as had to sand a lot
          check out following fb link as this may be a better way to do it by splitting sections whereas I did fully contiguously from the gunwhale to the keel
        </p>

        <p>
          here are some photos of the process with added descriptions for the relevant sections perhaps
          mostly used the rubber bands and binder clips to hold the planks, with sometimes requiring tape and drawing pins and string to hold it correctly
          mostly this worked out well although at one point I rushed before previous layer had dried and it caused a buckle, whoops
          recommend waiting at least a day or two between layers which ended up being a v slow process, perhaps doing a better form would mean less internal stress and therefore less waiting time between layers
          did mirrored layers at the same time to save time
        </p>

        <p>
          I didn't like that the transom was the birch laser cut ply, so made up a small rectangle from the Cedar planks and then refit the transom to the boat, think it looks much better than before!
          the design shows an angled transom but for ease I went pure vertical
        </p>

      </div>

      <div style={styles.fullWidth}>
        <h2>Fibreglassing and Removing Hull from Mould</h2>

        <p>
          initially sanded the outside layer smooth as possible to some degree of smoothness
          then used the following fibreglass as recommended by xx xxx in a single layer over the whole thing
          check out the link as gives great description on how to get best surface finish
          it looks incredible!
        </p>

        <p>
          cut off excess fibreglass and then removed from mould
          again sanded off excess glue on the inside to prepare for fibreglassing
          added some internal planks to the gunwhales in preparation for attaching deck and other deck hardware, in retrospect I did not leave a lip and this may be preferential to get a nice edge with the deck!
          went to fibreglass, in my naivety (use the double i) I went for one sheet and could not get it to sit inside the tight crevices near the front
          had a bit of a meltdown mid epoxying and just ended up using the resin with now fibreglass, think it'll be okay
          but for your own sanity I would recommend cutting sheets in half and doing at least two or more strips along the hull to avoid sticky resin messes with tight corners etc !!
          maybe explain above a bit more clearly
        </p>

        <p>
          the final hull looks fab and is hopefully strong enough to withstand the beginner RC sailor!
          things I would make not of and do differentialy next time:
        </p>

      </div>

      <div style={styles.fullWidth}>
        <h2>Fitting out the Hull Internals</h2>

        <p>
          bought those bits from that website for keel case and mast step? or support and main sheet post etc
          added in the recommend drawing internal framing, although my hull was wider than the design so the back two supports are actually under compression, added some fibreglassing to the fillets to strengthen
        </p>

        <p>
          to keep costs down i bought a cheap second hand boat for parts, came with the following:
          thanks to dude who had lush backyard shed workshop, the joys of retirement and owning a house !
        </p>

      </div>

      <div style={styles.fullWidth}>
        <h2>Attaching Hull Apendages and Deck</h2>

      </div>

      <div style={styles.fullWidth}>
        <h2>First Float and Sail</h2>

      </div>

    </div>
  );
};

export default ProjectPageInternationalOneMetre1;