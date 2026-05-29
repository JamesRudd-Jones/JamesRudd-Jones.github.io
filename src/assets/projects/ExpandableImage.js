// src/components/ExpandableImage.js
import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const ExpandableImage = ({ src, alt, caption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    figure: { margin: 0, width: '100%' },
    image: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      display: 'block',
      cursor: 'zoom-in',
      transition: 'opacity 0.2s ease-in-out',
    },
    caption: {
      marginTop: '8px',
      fontSize: '0.9rem',
      color: '#555',
      fontStyle: 'italic',
      textAlign: 'center',
    },
    overlay: {
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(5px)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 9999, cursor: 'zoom-out',
    },
    fullImg: {
      maxWidth: '90%', maxHeight: '90%',
      borderRadius: '4px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.36)',
    }
  };

  const modal = isOpen ? (
    <div style={styles.overlay} onClick={() => setIsOpen(false)}>
      <img src={src} alt={alt} style={styles.fullImg} />
    </div>
  ) : null;

  return (
    <>
      <figure style={styles.figure}>
        <img 
          src={src} 
          alt={alt} 
          loading="lazy"
          style={styles.image} 
          onClick={() => setIsOpen(true)} 
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'} 
        />
        {caption && <figcaption style={styles.caption}>{caption}</figcaption>}
      </figure>
      {isOpen && createPortal(modal, document.body)}
    </>
  );
};

export default ExpandableImage;