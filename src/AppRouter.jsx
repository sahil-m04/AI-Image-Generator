import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageGenerator from './Components/ImageGenerator/ImageGenerator';
import About from './Components/About/About';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImageGenerator />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;