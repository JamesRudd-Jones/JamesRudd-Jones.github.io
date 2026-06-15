// src/components/Writings.js
import React from 'react';
import { allWritings } from "../assets/writings/writingData";
import WritingItem from './WritingItem';

const Writings = () => {
  return (
    <div>
      <h1>Writings</h1>

      <p>
        {/* Some personal musings. */}
      </p>

      <div>
        {allWritings.map((indwriting) => (
          <WritingItem
            key={indwriting.id}
            indwriting={indwriting}
          />
        ))}
      </div>

    </div>
    
  );
};

export default Writings;