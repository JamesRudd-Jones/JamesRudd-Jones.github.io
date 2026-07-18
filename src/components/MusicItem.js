// src/components/WritingItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const MusicItem = ({ indmusic }) => {
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
      {/* {indwriting.image && (
        <div style={styles.imageContainer}>
          <img src={indwriting.image} alt={indwriting.title} style={styles.image} />
        </div>
      )} */}
      <div style={styles.textContainer}>
        <div style={styles.title}>
          <Link 
            to={indmusic.link} 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {indmusic.title}
          </Link>
        </div>
        <div style={styles.details}>
          {indmusic.abstract && <div>{indmusic.abstract}</div>}
        </div>
      </div>
    </div>
  );
};

export default MusicItem;