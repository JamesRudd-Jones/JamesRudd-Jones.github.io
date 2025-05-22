// src/components/PublicationItem.js
import React from 'react';

const PublicationItem = ({ publication, highlightName }) => {
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
      fontSize: '1.0em',
    },
    authors: {
      marginBottom: '3px',
      fontSize: '0.9em',
      color: '#555',
    },
    highlight: {
      fontWeight: 'bold', // For bolding
      color: 'blue',     // For blue color 
    },
    details: {
      fontSize: '0.9em',
      color: '#777',
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

  const renderAuthorsWithHighlight = () => {
    if (!publication.authors || !highlightName) {
      return <div>{publication.authors}</div>;
    }

    const parts = publication.authors.split(new RegExp(`(${highlightName})`, 'gi'));
    return (
      <div>
        {parts.map((part, index) =>
          part.toLowerCase() === highlightName.toLowerCase() ? (
            <span key={index} style={styles.highlight}>{part}</span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {publication.image && (
        <div style={styles.imageContainer}>
          <img src={publication.image} alt={publication.title} style={styles.image} />
        </div>
      )}
      <div style={styles.textContainer}>
        <div style={styles.title}>{publication.title}</div>
        <div style={styles.authors}>{renderAuthorsWithHighlight()}</div>
        <div style={styles.details}>
          {publication.journal && <div>{publication.journal}</div>}
          {publication.workshop && <div>{publication.workshop}</div>}
          {publication.conference && <div>{publication.conference}</div>}
        </div>
        <div style={styles.links}>
          {publication.paperLink && (
            <a href={publication.paperLink} target="_blank" rel="noopener noreferrer" style={styles.linkButton}>
              Paper
            </a>
          )}
          {publication.codeLink && (
            <a href={publication.codeLink} target="_blank" rel="noopener noreferrer" style={styles.linkButton}>
              Code
            </a>
          )}
          {publication.posterLink && (
            <a href={publication.posterLink} target="_blank" rel="noopener noreferrer" style={styles.linkButton}>
              Poster
            </a>
          )}
          {publication.bibtexLink && (
            <a href={publication.bibtexLink} target="_blank" rel="noopener noreferrer" style={styles.linkButton}>
              Bibtex
            </a>
          )}
          {/* could add talk or further here */}
        </div>
      </div>
    </div>
  );
};

export default PublicationItem;