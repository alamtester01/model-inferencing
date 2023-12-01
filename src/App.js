// src/App.js
import React, { useState } from 'react';
import StreamlitEmbed from './StreamlitEmbed';
import TrafficSignDetection from './TrafficSignDetection';
import ObjectDetection from './Objectdetection'; // Import your Object Detection component
import './App.css';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="App">
      <h1>Model Inferencing</h1>
      <div className="tab-container">
        <div
          className={`tab ${selectedTab === 0 ? 'active' : ''}`}
          onClick={() => setSelectedTab(0)}
        >
          Breast Cancer Predictor
        </div>
        <div
          className={`tab ${selectedTab === 1 ? 'active' : ''}`}
          onClick={() => setSelectedTab(1)}
        >
          Traffic Sign Detection
        </div>
        <div
          className={`tab ${selectedTab === 2 ? 'active' : ''}`}
          onClick={() => setSelectedTab(2)}
        >
          Object Detection
        </div>
      </div>
      {selectedTab === 0 && <StreamlitEmbed />}
      {selectedTab === 1 && <TrafficSignDetection />}
      {selectedTab === 2 && <ObjectDetection />} {/* Render your Object Detection component */}
    </div>
  );
}

export default App;
