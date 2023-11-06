import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import DashboardPage from './features/dashboard/presentation/page/DashboardPage';
import LoginPage from './features/auth/presentation/page/LoginPage';
import SignUpPage from './features/auth/presentation/page/SignUpPage';
import ForgotPasswordPage from './features/auth/presentation/page/ForgotPasswordPage';

const App: React.FC = () => (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
);

export default App;
