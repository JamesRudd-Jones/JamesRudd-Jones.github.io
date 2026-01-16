// src/components/Projects.js
import React from 'react';
import { allProjects } from '../assets/projects/projectData';
import ProjectItem from './ProjectItem'; 

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      {/* <h3>Excerpts of public repositories. </h3> */}

      <p>
        A collection of some of my creative endeavours, including design, engineering, programming, and more.
        As much to be a helpful resource for others, as a personal record for myself! 
      </p>

      <h4>
        Please email me if you have any questions or ammendments.
      </h4>

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