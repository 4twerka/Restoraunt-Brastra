import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { WinePage } from './pages/WinePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path='/wine' element={<WinePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;