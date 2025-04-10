// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Publications from './components/Publications';
import Talks from './components/Talks';
import Blog from './components/Blog';
import ImageAndProfileLinks from './components/ImageAndProfileLinks';
import AboutMe from './components/AboutMe';
import SelectedPublications from './components/SelectedPublications';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import backgroundImage from './assets/images/background_image.jpg';

function App() {
  const styles = {
    container: {
      fontFamily: 'Garamond, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      minHeight: '100vh', 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: '50%', // Center horizontally
      transform: 'translateX(-50%)', // Adjust for centering
      width: '80%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: 0,
    },
    contentWrapper: {
      position: 'relative', // Create a stacking context for z-index
      zIndex: 1, // Ensure content is above the background and overlay
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%', // Maintain the 80% width for your main content
      maxWidth: '1200px',
      padding: '10px 0', // Add some padding around the main content
      paddingTop: '60px'
    },
    navbarContainer: {
      position: 'fixed', // Make the navbar fixed to the top
      top: '0px', // Adjust this value to control the clipping
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80%',
      maxWidth: '1200px',
      zIndex: 2, // Ensure it's above other content
    },
    mainContent: {
      display: 'flex',
      width: '90%',
      maxWidth: '1200px',
    },
    leftSection: {
      flex: 0.4, 
      paddingRight: '0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', 
    },
    rightSection: {
      flex: 0.6, 
      paddingLeft: '00px',
    },
    remainderSection: {
      flex: 0.4, 
      paddingRight: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '90%',
    }
  };

  return (
    <Router>
      <div style={styles.container}>
      <div style={styles.navbarContainer}>
        <Navbar />
        </div>
        <div style={styles.overlay}>
        
        <div style={styles.contentWrapper}>
        <div style={styles.mainContent}>
          <div style={styles.leftSection}>
            <ImageAndProfileLinks /> {/* Contains image and social links */}
          </div>
          <div style={styles.rightSection}>
            <Routes>
              <Route path="/" element={<Home />} /> {/* Home page content */}
              <Route path="/publications" element={<Publications />} />
              <Route path="/talks" element={<Talks />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
        </div>

        <div style={styles.remainderSection}>
              <SelectedPublications /> {/* Selected Publications below the image */}
              <WorkExperience />
              <Education />
              {/* <Hobbies /> */}
        </div>
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;