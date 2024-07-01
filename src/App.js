import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import ImageGenerator from './Components/ImageGenerator/ImageGenerator';

const App = () => {
  return (
    <div>
      <AppRouter/>
      <ImageGenerator />
    </div>
  );
}

export default App;
