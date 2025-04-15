import React from 'react';
import profileImage from '../assets/images/profile_image_4_website.jpg'; 
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EmailCopyIcon from './EmailCopyIcon';

const ImageAndProfileLinks = () => {
  const styles = {
    leftSection: {
      flex: 0.3, // Adjust the ratio
      paddingRight: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    imagePlaceholder: {
      width: '100%', 
      height: '70%', 
      backgroundColor: '#ddd',
      borderRadius: '10%',
      marginBottom: '15px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '0.8em',
    },
    socialLinks: {
      display: 'flex',
      gap: '10px',
    },
    profileImg: {
      width: '100%', 
      height: '100%', 
      borderRadius: '10%',
      objectFit: 'cover',
    },
  };

  const myEmail = "james.rudd-jones.22@ucl.ac.uk";

  const Iconcolour = "#2f7657"

  return (
    <div style={styles.leftSection}>
      <div style={styles.imagePlaceholder}>
        <img src={profileImage} alt="My Profile" style={styles.profileImg} />
      </div>
      <div style={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/james-rudd-jones-1867b6197/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} color={Iconcolour} />
        </a>
        <a href="https://github.com/JamesRudd-Jones" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} color={Iconcolour} />
        </a>
        {/* <a href="https://scholar.google.com/citations?user=Ox5qME4AAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGoogleScholar} />
        </a> */}
        <EmailCopyIcon email={myEmail} colour={Iconcolour} />
      </div>
    </div>
  );
};

export default ImageAndProfileLinks;