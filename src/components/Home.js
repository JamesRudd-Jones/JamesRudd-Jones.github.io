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
      borderBottom: '1px solid #aaa',
    },
    leftSection: {
      flex: 0.3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginBottom: '-40px',
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
    indSection: {
      paddingTop: '20px', 
      paddingBottom: '20px',
      borderBottom: '1px solid #aaa',
    },
    lastSection: {
      paddingTop: '20px', 
    },
    selectedPublicationsSection: {
      marginTop: '0px',
      listStyleType: 'none'
    },
    aboutMe: {
      // marginBottom: '20px',
      // borderBottom: '1px solid #eee',
      // paddingBottom: '20px',
    },
    largerFont: {
      fontSize: '1.0em'
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
              {/* <h3>About Me</h3> */}
              <p style={styles.largerFont}>
                Hi, I am a second year PhD student in Machine Learning at UCL supervised 
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
        <div style={styles.indSection}>
          <h1>Research Interests</h1>
            <p style={styles.largerFont}>My main focus is on Reinforcement Learning for non-linear dynamical systems particularly regarding chaotic dynamics, but I am generally interested in decision making under uncertainty 
                within physical process based scenarios (e.g. Weather/Climate/Fluids/Fusion). 
                <br></br> <br></br> 
                As an avid sailor I am also greatly interested in the use of Machine Learning for the maritime industry, especially high performance sailing 
                such as the America's Cup. This domain highlights many challenges in the use of Machine Learning due to the heavily stochastic and non-linear 
                nature of the wind and waves. As well as difficulty optimising when dealing with heavily confounded multi-objectives such as light wind versus heavy wind performance. 
                <br></br> <br></br> 
                Further, I also explore applications of ML for environmental and sustainable uses such as 
                the prediction of Forest Succession. 
                <br></br> <br></br> 
                Please reach out for discussions and/or collaborations in any of these areas!
            </p>
        </div>

        <div style={styles.indSection}>
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
        </div>

        {/* <WorkExperience /> */}
        <Education />
        {/* <Hobbies /> */}
      </div>
    </div>
  );
};

export default Home;