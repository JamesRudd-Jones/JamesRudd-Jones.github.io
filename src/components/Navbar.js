import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      backgroundColor: '#f0f0f0',
      padding: '10px 0',
      borderRadius: '5px',
      marginBottom: '20px',
      width: "100%",
    },
    navList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
    },
    navItem: {
      margin: '0 15px',
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: 'bold',
    },
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>HOME</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/publications" style={styles.navLink}>PUBLICATIONS</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/talks" style={styles.navLink}>TALKS</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/blog" style={styles.navLink}>BLOG</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;