import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import WelcomePage from './components/pages/WelcomePage';
import NotFoundPage from './components/pages/NotFoundPage';
import Contact from './components/pages/Contact';
import ViewContactList from './components/pages/ViewContactList';
import Sidebar from './components/layout/Sidebar';
import UpdateContact from './components/pages/UpdateContact';
import SignOut from './components/pages/SignOut';
import ChangePassword from './components/pages/ChangePassword';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in when component mounts
  useEffect(() => {
    const uid = localStorage.getItem('uid');
    console.log("uid from app js ::"+uid)
    if (uid) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn && <Sidebar />} {/* Render sidebar only if logged in */}
      {!isLoggedIn && <Navbar />} {/* Render navbar only if not logged in */}
      {console.log(" isLoggedIn:::" + isLoggedIn)}

      <div className={`container body-area${isLoggedIn ? ' body-pd' : ''}`}>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          {/* Redirect to login if not logged in */}
          <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} />
          <Route exact path="/edit/:id" element={<UpdateContact />} />
          <Route exact path="/logout" element={<SignOut setIsLoggedIn={setIsLoggedIn} />} />
          {/* Redirect to login if not logged in */}
          <Route path="/contact-list" element={isLoggedIn ? <ViewContactList /> : <Navigate to="/login" />} />
          <Route path="/change-password" element={<ChangePassword/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
