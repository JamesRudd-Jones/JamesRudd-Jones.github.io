// components/Home.js
import React from 'react';
import AboutMe from './AboutMe';
// Remove the import and rendering of SelectedPublications

const Home = () => {
  return (
    <div>
      <h1>James Rudd-Jones</h1>
      <AboutMe />
      {/* You might have other introductory content here */}
    </div>
  );
};

export default Home;