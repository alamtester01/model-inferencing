// src/Objectdetection.js
import React from 'react';

const Objectdetection = () => {
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
        title="Object Detection using YOLOv8"
        src="https://codingmantras-yolov8-streamlit-detection-tracking-app-njcqjg.streamlit.app/?embedded=true"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <div dangerouslySetInnerHTML={{ __html: hideStreamlitStyle }} />
    </div>
  );
};

export default Objectdetection;
