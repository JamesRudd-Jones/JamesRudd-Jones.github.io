// src/components/Packages.js
import React from 'react';
import { allPackages } from '../assets/packages/packageData';
import PackageItem from './PackageItem'; 

const Packages = () => {
  return (
    <div>
      <h1>Repositories</h1>
      {/* <h3>Excerpts of public repositories. </h3> */}
      <div>
        {allPackages.map((indpackage) => (
          <PackageItem
            key={indpackage.id}
            indpackage={indpackage}
          />
        ))}
      </div>
    </div>
  );
};

export default Packages;