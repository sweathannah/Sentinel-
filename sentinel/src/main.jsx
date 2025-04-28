import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import GuestReport from './pages/GuestReport';

import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/guest-report" element={<GuestReport />}></Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
              {/* later you can add more dashboard pages here like <Route path="my-reports" element={<MyReportsPage />} /> */}
            </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
