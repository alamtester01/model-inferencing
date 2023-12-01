// src/StreamlitEmbed.js
import React from 'react';

const StreamlitEmbed = () => {
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
        title="Breast Cancer Predictor App"
        src="https://alejandro-ao-streamlit-cancer-predict-appmain-uitjy1.streamlit.app/?embedded=true"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        // allowFullScreen
      ></iframe>
      <div dangerouslySetInnerHTML={{ __html: hideStreamlitStyle }} />
    </div>
  );
};

export default StreamlitEmbed;
