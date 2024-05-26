import React from 'react';
import ReactDOM from 'react-dom/client';
import Textbox from './Textbox';
import Generate from './Generate';
import VideoDropDown from './VideoDropDown';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Subway Surfer Video Generator</h1>
    <Textbox />
    <Generate /> <VideoDropDown />
  </React.StrictMode>
);
