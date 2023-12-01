// src/TrafficSignDetection.js
import React from 'react';

const TrafficSignDetection = () => {
  const hideStreamlitStyle = `
    <style>
      #MainMenu {visibility: hidden;}
      footer {visibility: hidden;}
      header {visibility: hidden;}
    </style>
  `;

  return (
    <div style={{ height: '100vh', overflow: 'hidden', margin: 0 }}>
      <iframe
        title="Traffic Sign Detection App"
        src="https://trafficsignsdetection.streamlit.app/?embedded=true"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <div dangerouslySetInnerHTML={{ __html: hideStreamlitStyle }} />
    </div>
  );
};

export default TrafficSignDetection;
