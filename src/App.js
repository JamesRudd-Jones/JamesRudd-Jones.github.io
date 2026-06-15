// src/App.js
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// import Talks from './components/Talks';
// import Blog from './components/Blog';

const Home = lazy(() => import('./components/Home'));
const Publications = lazy(() => import('./components/Publications'));
const Packages = lazy(() => import('./components/Packages'));
const Projects = lazy(() => import('./components/Projects'));
const Writings = lazy(() => import('./components/Writings'));

const ProjectPageWindChime1 = lazy(() => import('./assets/projects/wind_chime_1/project_page-wind_chime_1'));  // TODO can I make this better to import?
const ProjectPageInternationalOneMetre1 = lazy(() => import('./assets/projects/iom_1/project_page-iom_1'));

const WritingPageDubstepLack = lazy(() => import('./assets/writings/dubstep_lack/writing_page-dubstep_lack'));

const importAll = (r) => r.keys().map(r);

const backgroundImages = importAll(require.context('./assets/images/background_images', false, /\.(png|jpe?g|svg|JPG)$/));

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const MaxWidthPage = "1800px"; // Set the maximum width for the page
  // const PercentDiffMiddle = "75%";
  const PercentDiffMiddle = isMobile ? "100%" : "77%";
  const resultantMaxWidth = parseFloat(MaxWidthPage) * parseFloat(PercentDiffMiddle) / 100;
  const [currentBg, setCurrentBg] = useState(backgroundImages[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setCurrentBg(backgroundImages[randomIndex]);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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

      transition: 'all 0.4s ease-in-out',
    },  
    container: {
      // fontFamily: 'Garamond, sans-serif',
      fontFamily: 'Helvetica',
      // fontWeight: "italic",
      lineHeight: "1.4",
      // fontWeight: "10",
      fontSize: '14px',
      color: '#111',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh', 
      maxWidth: MaxWidthPage,
      position: 'relative',
      margin: '0 auto', 
      backgroundImage: `url(${currentBg})`, 
      backgroundSize: '100% auto',
    },
    overlay: {
      position: 'relative',
      // marginTop: '30px',
      marginTop: isMobile ? '0px' : '30px',
      width: PercentDiffMiddle,
      // backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backgroundColor: 'rgba(245, 250, 245, 0.9)',
      minHeight: "100vh",  // Ensures the translucent overlay covers entire page even if content is too short
      zIndex: 0,
      borderRadius: '5px 5px 0 0',
      transition: 'all 0.4s ease-in-out',
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
            <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/publications" element={<Publications />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects" element={<Projects />} />
                {/* <Route path="/talks" element={<Talks />} /> */}
                <Route path="/writings" element={<Writings />} />

                {/* project page links below for Link routing */}
                <Route path="/wind_chime_1" element={<ProjectPageWindChime1 />} />
                <Route path="/iom_1" element={<ProjectPageInternationalOneMetre1 />} />

                {/* writing page links below for Link routing */}
                <Route path="/dubstep_lack" element={<WritingPageDubstepLack />} />

              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;