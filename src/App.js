import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage authentication

  return (
    <div className="App">
      {isLoggedIn ? <Sidebar /> : <Navbar />}

      <div className={`container body-area${isLoggedIn ? ' body-pd' : ''}`}>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/navbar" element={<Navbar />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/edit/:id" element={<UpdateContact />} />
          <Route exact path="/logout" element={<SignOut />} />
          <Route exact path="/contact-list" element={<ViewContactList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
