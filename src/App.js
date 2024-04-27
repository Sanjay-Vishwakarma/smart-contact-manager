import React from 'react';
import Navbar from './components/layout/Navbar';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import HomePage from './components/pages/HomePage';
import AboutPage  from './components/pages/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
