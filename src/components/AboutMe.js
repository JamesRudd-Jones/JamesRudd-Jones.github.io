import React from 'react';

const AboutMe = () => {
  const styles = {
    aboutMe: {
      marginBottom: '20px',
      borderBottom: '1px solid #eee',
      paddingBottom: '20px',
    },
  };

  return (
    <div style={styles.aboutMe}>
      <h2>About Me</h2>
      <p>Hihi, I am a second year PhD student in Machine Learning at UCL supervised by <a href="https://www.mariaperezortiz.com/" target="_blank" rel="noopener noreferrer">María Pérez-Ortiz</a> as part of the <a href="https://www.sml-group.cc/" target="_blank" rel="noopener noreferrer">Sustainability and Machine Learning Group</a>. </p>
      <p>My main focus is on Reinforcement Learning for chaotic and non-linear dynamical systems, but I am generally interested in decision making under uncertainty 
        within physical process based scenarios (e.g. Weather/Climate/Fluids/Fusion). Further, I also explore applications of ML for environmental and sustainable uses such as 
        the prediction of Forest Succession.</p>
    </div>
  );
};

export default AboutMe;