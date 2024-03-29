import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import CalculatePage from './pages/CalculatePage';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/calculator" element={<CalculatePage />} />
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </Router>
);

export default App;
