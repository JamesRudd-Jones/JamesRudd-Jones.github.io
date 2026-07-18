import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbg: {
      backgroundColor: '#cad8cd',
      padding: '10px 0',
      borderRadius: '5px 5px 0 0',
      marginBottom: '20px',
      width: "100%",
    },
    navbar: {
      // alignItems: 'center',
      // width: "120%",
      // transform: 'translateX(3%)',
    },
    navList: {
      listStyle: 'none',
      padding: '0 0 0 5%',
      margin: 0,
      display: 'flex',
      flexWrap: 'nowrap',             // Force it to stay on one line
      justifyContent: 'flex-start',   // Keep everything aligned to the Left-Hand Side
      // The gap shrinks from 25px down to a minimum of 5px based on screen width
      gap: 'clamp(5px, 6%, 80px)',
      
    },
    navItem: {
      margin: 0,
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: 'bold',
      // fontSize: "1.6em"
      fontSize: "clamp(1.2em, 1.7vw, 1.6em)", 
      padding: "5px 0px", 
      whiteSpace: 'nowrap',
    },
  };

  return (
    <nav style={styles.navbg}>
      <div style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/publications" style={styles.navLink}>Publications</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/packages" style={styles.navLink}>Repositories</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/projects" style={styles.navLink}>Projects</Link>
          </li>
          {/* <li style={styles.navItem}>
            <Link to="/talks" style={styles.navLink}>TALKS</Link>
          </li> */}
          <li style={styles.navItem}>
            <Link to="/writings" style={styles.navLink}>Writings</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/musics" style={styles.navLink}>Music</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;