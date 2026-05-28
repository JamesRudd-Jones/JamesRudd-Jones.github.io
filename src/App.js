// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Publications from './components/Publications';
import Packages from './components/Packages';
import Projects from './components/Projects';
// import Talks from './components/Talks';
// import Blog from './components/Blog';
// import bg1 from './assets/images/background_images/fowey.jpg';
// import bg2 from './assets/images/background_images/light_on_tree.jpg'; 
import ProjectPageWindChime1 from './assets/projects/wind_chime_1/project_page-wind_chime_1';
import ProjectPageInternationalOneMetre1 from './assets/projects/iom_1/project_page-iom_1';
// import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
// import {Helmet} from "react-helmet"; 

// const backgroundImages = [bg1, bg2];

const importAll = (r) => r.keys().map(r);

const backgroundImages = importAll(require.context('./assets/images/background_images', false, /\.(png|jpe?g|svg|JPG)$/));

function App() {
  const MaxWidthPage = "1400px"; // Set the maximum width for the page
  const PercentDiffMiddle = "80%";
  const resultantMaxWidth = parseFloat(MaxWidthPage) * parseFloat(PercentDiffMiddle) / 100;
  const [currentBg, setCurrentBg] = useState(backgroundImages[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setCurrentBg(backgroundImages[randomIndex]);
  }, []);

  const styles = {
    backgroundFill: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(240, 240, 240, 1.0)', // Choose your desired background color
      alignItems: 'center',
    },  
    navbarContainer: {
      // fontFamily: 'Garamond, sans-serif',
      fontFamily: 'Helvetica',
      fontSize: '13px',
      position: 'fixed', // Make the navbar fixed to the top
      top: '0px', 
      left: '50%',
      transform: 'translateX(-50%)',
      width: PercentDiffMiddle,
      maxWidth: resultantMaxWidth,
      zIndex: 2, // Ensure it's above other content
    },  
    container: {
      // fontFamily: 'Garamond, sans-serif',
      fontFamily: 'Helvetica',
      // fontWeight: "italic",
      lineHeight: "1.4",
      fontWeight: "10",
      fontSize: '14px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh', 
      maxWidth: MaxWidthPage,
      position: 'relative',
      margin: '0 auto', // Center horizontally

      backgroundImage: `url(${currentBg})`, // Use the randomized state variable
      // backgroundSize: 'cover',              // Scales image to fill the screen (may crop edges)
      // backgroundPosition: 'center center',  // Keeps the focal point of the image in the middle
      // backgroundRepeat: 'no-repeat',        // Prevents ugly seams
      // backgroundAttachment: 'fixed',        // Optional, but highly recommended! Keeps the background still while you scroll down the page
      backgroundSize: '100% auto',
      // // backgroundRepeat: 'top center repeat-y',   
    },
    overlay: {
      position: 'relative',
      top: '30px',
      width: PercentDiffMiddle,
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      minHeight: "100vh",  // Ensures the translucent overlay covers entire page even if content is too short
      zIndex: 0,
    },
    contentWrapper: {
      position: 'relative', 
      zIndex: 1, // Ensure content is above the background and overlay
      display: 'flex',
      left: '50%', 
      transform: 'translateX(-50%)', 
      flexDirection: 'column', 
      paddingTop: '50px',
      paddingBottom: '50px', // adds some bottom padding if we remove the minheight feature from the overlay
      width: "90%"
    },
  };

  return (
    <Router>
      <div style={styles.backgroundFill}></div>
      <div style={styles.navbarContainer}>
        <Navbar />
      </div>
      <div style={styles.container}>
        <div style={styles.overlay}>
          <div style={styles.contentWrapper}>
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/publications" element={<Publications />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects" element={<Projects />} />
              {/* <Route path="/talks" element={<Talks />} /> */}
              {/* <Route path="/blog" element={<Blog />} /> */}

              {/* project page links below for Link routing */}
              <Route path="/wind_chime_1" element={<ProjectPageWindChime1 />} />
              <Route path="/iom_1" element={<ProjectPageInternationalOneMetre1 />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;