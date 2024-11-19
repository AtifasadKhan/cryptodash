import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CoinDetail from './pages/CoinDetail';
import './index.css';

const App = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/coins/:id" element={<CoinDetail />} />
      </Routes>
    </Router>
);

export default App;
