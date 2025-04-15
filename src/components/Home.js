// components/Home.js
import React from 'react';
import ImageAndProfileLinks from './ImageAndProfileLinks';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Hobbies from './Hobbies';
import { allPublications } from '../assets/publications/publicationData';
import PublicationItem from './PublicationItem';

const Home = () => {
  const indicesToDisplay = [0, 1]; // Select publications by their index
  const nameToHighlight = 'James Rudd-Jones'; // Example name to highlight

  const featuredPublications = indicesToDisplay.map(index => {
    if (index >= 0 && index < allPublications.length) {
      return allPublications[index];
    }
    return null;
  }).filter(publication => publication !== null);

  const styles = {
    mainContent: {
      display: 'flex',
    },
    leftSection: {
      flex: 0.35,
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    selectedPublicationsSection: {
      marginTop: '0px',
      listStyleType: 'none',
    },
    aboutMe: {
      marginBottom: '20px',
      borderBottom: '1px solid #eee',
      paddingBottom: '20px',
    },
    largerFont: {
      fontSize: '18px'
    }
    }

  return (
    <div>
      <div style={styles.mainContent}>
        <div style={styles.leftSection}>
          <ImageAndProfileLinks /> 
        </div>
        <div style={styles.rightSection}>
          <div>
            <h1>James Rudd-Jones</h1>
            <div style={styles.aboutMe}>
              <h2>About Me</h2>
              <p style={styles.largerFont}>
                Hihi, I am a second year PhD student in Machine Learning at UCL supervised 
                by <a href="https://www.mariaperezortiz.com/" target="_blank" rel="noopener noreferrer">María Pérez-Ortiz</a> as 
                part of the <a href="https://www.sml-group.cc/" target="_blank" rel="noopener noreferrer">Sustainability and Machine Learning Group</a>. 
                <br></br> <br></br>
                I am supported by the UCL EPSRC DTP studentship.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.remainderSection}>
        <h1>Research Interests</h1>
          <p style={styles.largerFont}>My main focus is on Reinforcement Learning for non-linear dynamical systems particularly focusing on chaotic dynamics, but I am generally interested in decision making under uncertainty 
              within physical process based scenarios (e.g. Weather/Climate/Fluids/Fusion). 
              <br></br> <br></br> 
              Further, I also explore applications of ML for environmental and sustainable uses such as 
              the prediction of Forest Succession. 
          </p>

        {featuredPublications.length > 0 && (
          <div style={styles.selectedPublicationsSection}>
            <h1>Featured Publications</h1>
            <div style={styles.selectedPublicationsList}>
                {featuredPublications.map((publication) => (
                  <li key={publication.id}>
                    <PublicationItem publication={publication} highlightName={nameToHighlight}/>
                  </li>
                ))}
            </div>
          </div>
        )}

        <WorkExperience />
        <Education />
        {/* <Hobbies /> */}
      </div>
    </div>
  );
};

export default Home;