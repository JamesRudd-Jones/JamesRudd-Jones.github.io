// src/assets/writings/writingFonts.js
import React from "react";

export const writingContainer = {
  // fontFamily: 'Crimson Pro',
  // fontFamily: "Merriweather",
  fontFamily: "Lora",
  // fontFamily: "Joan",
  fontSize: "1rem", 
  lineHeight: "1.6",
  color: "#222",
}

export const Emph = ({ children }) => {
  const textLength = typeof children === 'string' ? children.length : 0;
  
  const marginAdjustment = `-${textLength * 0.06}em`;

  const style = {
    // fontFamily: 'Crimson Pro',
  fontFamily: "Merriweather",
  // fontFamily: "Lora",
  // fontFamily: "Joan",
    fontStyle: "italic",
    fontSize: "1.0rem",         
    letterSpacing: "-0.03em",   
    fontWeight: 500,
    display: "inline-block",
    transform: "scaleX(0.85)",
    transformOrigin: "left center",
    marginRight: marginAdjustment, 
    position: "relative",
    // top: "0.5px",  // TODO why do some lines look good and some not?
  };

  return <span style={style}>{children}</span>;
};