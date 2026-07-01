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
    fontWeight: 400,

    display: "inline-block",
    transform: "scaleX(0.85)",

    transformOrigin: "left bottom",
    verticalAlign: "baseline",
    marginRight: marginAdjustment, 

    // marginTop: "0.1em",    
    // marginBottom: "0.1em",

    // height: "1.2em", 
    // lineHeight: "1.2em",
    // overflow: "visible",

    // // fontFamily: "'Roboto Serif'",
    // fontFamily: "'Merriweather'",
    // fontStyle: "italic",
    // fontSize: "1.0rem",         
    // fontWeight: 300,
    
    // // Native CSS text-condensing!
    // // 100% is normal, anything lower is condensed (down to 50% for this font)
    // // fontStretch: "25%", 
    
    // // Alternatively, you can use the lower-level variable axis property:
    // fontVariationSettings: "'wdth' 5",
  };

  return <span style={style}>{children}</span>;
};