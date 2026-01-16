// src/components/ProjectItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ indproject }) => {
  const styles = {
    container: {
      display: 'flex',
      gap: '20px',
      marginBottom: '40px',
      alignItems: 'center', 
    },
    imageContainer: {
      flexShrink: 0,
      width: '240px',
      height: '140px', // Ensure a fixed height
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      // objectFit: 'contain',
      border: '1px solid #ccc',
    },
    textContainer: {
      flexGrow: 1,
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '5px',
      fontSize: '1.3em',
    },
    details: {
      fontSize: '0.9em',
      // color: '#777',
      marginBottom: '12px',
    },
    links: {
      fontSize: '0.9em',
      marginLeft: '-10px',
    },
    linkButton: {
      marginLeft: '10px',
      padding: '5px 10px',
      border: '1px solid #aaa',
      borderRadius: '8px',
      textDecoration: 'none',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      {indproject.image && (
        <div style={styles.imageContainer}>
          <img src={indproject.image} alt={indproject.title} style={styles.image} />
        </div>
      )}
      <div style={styles.textContainer}>
        <div style={styles.title}>
          <Link 
            to={indproject.link} 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {indproject.title}
          </Link>
        </div>
        <div style={styles.details}>
          {indproject.abstract && <div>{indproject.abstract}</div>}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;