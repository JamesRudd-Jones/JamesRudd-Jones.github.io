// src/components/Projects.js
import React from 'react';
import { allProjects } from '../assets/projects/projectData';
import ProjectItem from './ProjectItem'; 

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      {/* <h3>Excerpts of public repositories. </h3> */}
      <div>
        {allProjects.map((indproject) => (
          <ProjectItem
            key={indproject.id}
            indproject={indproject}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;