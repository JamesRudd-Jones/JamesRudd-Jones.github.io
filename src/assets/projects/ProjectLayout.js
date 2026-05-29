// src/components/ProjectLayout.js
import React from 'react';

export const Row = ({ children, style }) => (
  <div style={{
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'flex-start',
    // gap: '40px', 
    gap: 'clamp(10px, 4vw, 40px)',
    marginBottom: '40px', 
    width: '100%', 
    flexWrap: 'nowrap',
    ...style
  }}>
    {children}
  </div>
);

export const Column = ({ children, width = '100%', style }) => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    flex: `1 1 ${width}`,
    // flex: `0 0 ${width}`, 
    minWidth: 0,
    ...style }}>
    {children}
  </div>
);

export const FullWidth = ({ children, style }) => (
  <div style={{ 
    width: '100%', 
    marginBottom: '20px', 
    ...style }}>
    {children}
  </div>
);