// src/components/PackageItem.js
import React from 'react';

const PackageItem = ({ indpackage }) => {
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
      fontSize: '1.1em',
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
      {indpackage.image && (
        <div style={styles.imageContainer}>
          <img src={indpackage.image} alt={indpackage.title} style={styles.image} />
        </div>
      )}
      <div style={styles.textContainer}>
        <div style={styles.title}>{indpackage.title}</div>
        <div style={styles.details}>
          {indpackage.abstract && <div>{indpackage.abstract}</div>}
        </div>
        <div style={styles.links}>
          {indpackage.paperLink && (
            <a href={indpackage.paperLink} target="_blank" rel="noopener noreferrer" style={styles.linkButton}>
              Paper
            </a>
          )}
          {indpackage.codeLink && (
            <a href={indpackage.codeLink} target="_blank" rel="noopener noreferrer" style={styles.linkButton}>
              Code
            </a>
          )}
          {indpackage.posterLink && (
            <a href={indpackage.posterLink} target="_blank" rel="noopener noreferrer" style={styles.linkButton}>
              Poster
            </a>
          )}
          {indpackage.bibtexLink && (
            <a href={indpackage.bibtexLink} target="_blank" rel="noopener noreferrer" style={styles.linkButton}>
              Bibtex
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackageItem;