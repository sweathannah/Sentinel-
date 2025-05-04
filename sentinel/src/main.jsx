import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
<<<<<<< HEAD
=======
import Home from './pages/Home';
import GuestReport from './pages/GuestReport';

import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';

>>>>>>> e11af6734d34ddad9ed8182227d3d6a96606684d
import './index.css';
import { 
  AuthPage, 
  GuestReport, 
  Login, 
  Register, 
  UserType,
  VerifyEmail,
  VerifyPhone
} from './pages';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>

          {/* Authentication routes  */}
          <Route index element={<AuthPage />} />
          <Route path="/guest-report" element={<GuestReport />}></Route>
<<<<<<< HEAD
          <Route path="/user-board" element={<UserType />}></Route>
          <Route path="/verify-phone" element={<VerifyPhone />}></Route>
          <Route path="/verify-email" element={<VerifyEmail />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

=======
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
              {/* later you can add more dashboard pages here like <Route path="my-reports" element={<MyReportsPage />} /> */}
            </Route>
>>>>>>> e11af6734d34ddad9ed8182227d3d6a96606684d
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
