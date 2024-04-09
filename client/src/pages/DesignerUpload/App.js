import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import UploadHouseModel from './components/UploadHouseModel';
import UploadStructuralModel from './components/UploadStructuralModel';
import UploadArticle from './components/UploadArticle';
import Messages from './components/message';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload-messages" element={<Messages/>} />
            <Route path="/upload-house" element={<UploadHouseModel />} />
            <Route path="/upload-structural" element={<UploadStructuralModel />} />
            <Route path="/upload-article" element={<UploadArticle />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
