// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ src, caption, type = "video/mp4" }) => {
  const styles = {
    figure: {
      margin: 0,
      width: '100%',
    },
    video: {
      width: '100%',
      height: 'auto',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      outline: 'none',
      backgroundColor: '#000', // Good for letterboxing if aspect ratio differs
    },
    caption: {
      marginTop: '8px',
      fontSize: '0.9rem',
      color: '#555',
      fontStyle: 'italic',
      textAlign: 'center', 
    }
  };

  return (
    <figure style={styles.figure}>
      <video style={styles.video} controls>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      {caption && <figcaption style={styles.caption}>{caption}</figcaption>}
    </figure>
  );
};

export default VideoPlayer;