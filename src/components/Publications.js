// src/components/Publications.js
import React from 'react';
import { allPublications } from '../assets/publications/publicationData';
import PublicationItem from './PublicationItem'; // Import the reusable component

const Publications = () => {
  const nameToHighlight = 'James Rudd-Jones'; // Example name to highlight

  return (
    <div>
      <h1>Publications</h1>
      <div>
        {allPublications.map((publication) => (
          <PublicationItem
            key={publication.id}
            publication={publication}
            highlightName={nameToHighlight} // Pass the name to highlight
          />
        ))}
      </div>
    </div>
  );
};

export default Publications;