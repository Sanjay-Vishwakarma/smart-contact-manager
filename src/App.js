import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import WelcomePage from './components/pages/WelcomePage';
import NotFoundPage from './components/pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';
import { Contact } from './components/pages/Contact';
import ViewContactList from './components/pages/ViewContactList';
import Sidebar from './components/layout/Sidebar';

function App() {
  const [showNav, setShowNav] = useState(true); // State to manage sidebar visibility

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Sidebar showNav={showNav} /> {/* Pass showNav state to Sidebar component */}
      <div className={`container body-area${showNav ? ' body-pd' : ''}`}>
        <Routes>
          {/* <Route exact path="/" element={<WelcomePage />} /> */}
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/contact-list" element={<ViewContactList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
