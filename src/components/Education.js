import React from 'react';
import UCLLogo from '../assets/images/UCL_logo_1.png'; 
import SotonLogo from '../assets/images/soton_logo.png'; 

const EducationItem = ({ institution, degree, thesis, supervisor, years, logoSrc }) => {
  const styles = {
    item: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
    },
    logoContainer: {
      width: '150px',
      height: '100px',
      marginRight: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px', 
      overflow: 'hidden', 
    },
    logo: {
      maxWidth: '100%',
      maxHeight: '200%',
      objectFit: 'contain', 
    },
    details: {
      flex: 1,
    },
    institutionName: {
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    degreeInfo: {
      marginBottom: '3px',
      fontSize: '0.9em',
    },
    supervisorInfo: {
      fontSize: '0.85em',
      color: '#555',
    },
    yearsInfo: {
      fontSize: '0.8em',
      color: '#777',
    },
    boldText: { 
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.item}>
      {logoSrc && (
        <div style={styles.logoContainer}>
          <img src={logoSrc} alt={`${institution} logo`} style={styles.logo} />
        </div>
      )}
      <div style={styles.details}>
        <div style={styles.institutionName}>{institution}</div>
        <div style={styles.degreeInfo}>{degree}</div>
        {thesis && <div style={styles.supervisorInfo}>Thesis - {thesis}</div>}
        {supervisor && (<div style={styles.supervisorInfo}> supervised by <span style={styles.boldText}>{supervisor}</span>
          </div>
        )}
        <div style={styles.yearsInfo}>{years}</div>
      </div>
    </div>
  );
};

const EducationSection = ({ educationData }) => {
  const styles = {
    education: {
      marginBottom: '20px',
      borderBottom: '1px solid #eee',
      paddingBottom: '20px',
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.education}>
      <h1 style={styles.title}>Education</h1>
      {educationData.map((item, index) => (
        <EducationItem key={index} {...item} />
      ))}
    </div>
  );
};

const Education = () => {
  const educationDetails = [
    {
      institution: 'University College London',
      degree: 'PhD Machine Learning',
      thesis: "Reinforcement Learning for Chaotic and Non-Linear Dynamical Systems",
      supervisor: 'María Pérez-Ortiz',
      years: '2023 - Present',
      logoSrc: UCLLogo,
    },
    {
      institution: 'University College London',
      degree: 'MSc Computer Science',
      thesis: "Multi-Agent Reinforcement Learning for Integrated Assesment Modelling",
      supervisor: 'María Pérez-Ortiz',
      years: '2022 - 2023',
      logoSrc: UCLLogo,
    },
    {
      institution: 'University of Southampton',
      degree: 'BEng Mechnical Engineering / Computational Engineering & Design ',
      thesis: "Utilising Multi-Agent Reinforcement Learning to Generate Fluid Flow",
      supervisor: 'Gabriel Weymouth',
      years: '2019 - 2022',
      logoSrc: SotonLogo, 
    },
  ];

  return (
    <EducationSection educationData={educationDetails} />
  );
};

export default Education;