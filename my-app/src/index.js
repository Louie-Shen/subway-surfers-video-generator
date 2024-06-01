import React from 'react';
import ReactDOM from 'react-dom/client';
import Textbox from './Textbox';
import Generate from './Generate';
import VideoDropDown from './VideoDropDown';
import VoiceDropDown from './VoiceDropDown'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Subway Surfer Video Generator</h1>
    <Textbox />
    <div className="controls-container">
    <VideoDropDown /> <VoiceDropDown /> <Generate /> 
    </div>
  </React.StrictMode>
  
);
