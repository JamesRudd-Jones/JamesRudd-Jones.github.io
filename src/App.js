// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Publications from './components/Publications';
import Packages from './components/Packages';
import Projects from './components/Projects';
import Talks from './components/Talks';
import Blog from './components/Blog';
import backgroundImage from './assets/images/background_image.jpg';
import ProjectPageWindChime1 from './assets/projects/wind_chime_1/project_page-wind_chime_1';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import {Helmet} from "react-helmet"; 

function App() {
  const MaxWidthPage = "1400px"; // Set the maximum width for the page
  const PercentDiffMiddle = "80%";
  const resultantMaxWidth = parseFloat(MaxWidthPage) * parseFloat(PercentDiffMiddle) / 100;

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
      background: `url(${backgroundImage})`,
      maxWidth: MaxWidthPage,
      backgroundSize: '100% auto',
      // backgroundRepeat: 'top center repeat-y',
      position: 'relative',
      margin: '0 auto', // Center horizontally
    },
    overlay: {
      position: 'relative',
      top: '30px',
      width: PercentDiffMiddle,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      minHeight: "100vh",
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
              {/* <Route path="/talks" element={<Talks />} /> */}
              {/* <Route path="/blog" element={<Blog />} /> */}

              {/* project page links below for Link routing */}
              <Route path="/wind_chime_1" element={<ProjectPageWindChime1 />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;