import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import GuestReport from './pages/GuestReport';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/guest-report" element={<GuestReport />}></Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
