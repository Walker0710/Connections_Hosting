import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Game from './component/Game';
import Login from './component/Login';
import Register from './component/Register';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Profile from './component/Profile';

function AppContent() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/login' || location.pathname === '/register';
  return (
    <>
    {console.log(location)}
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path='hash/' exact element={<Home />} />
        <Route path='hash/game' exact element={<Game />} />
        <Route path='hash/login' exact element={<Login />} />
        <Route path='hash/register' exact element={<Register />} />
        <Route path='hash/profile' exact element={<Profile />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;