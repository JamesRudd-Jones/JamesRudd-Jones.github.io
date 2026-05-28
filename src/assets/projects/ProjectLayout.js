// src/components/ProjectLayout.js
import React from 'react';

export const Row = ({ children, style }) => (
  <div style={{
    display: 'flex', flexDirection: 'row', alignItems: 'flex-start',
    gap: '40px', marginBottom: '40px', width: '100%', ...style
  }}>
    {children}
  </div>
);

export const Column = ({ children, width = '100%', style }) => (
  <div style={{ display: 'flex', flexDirection: 'column', flex: `0 0 ${width}`, ...style }}>
    {children}
  </div>
);

export const FullWidth = ({ children, style }) => (
  <div style={{ width: '100%', marginBottom: '20px', ...style }}>
    {children}
  </div>
);