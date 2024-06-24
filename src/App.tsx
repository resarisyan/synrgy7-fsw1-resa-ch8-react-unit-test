import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './redux/store/store';
import { AuthProvider } from './context/AuthContext';
import PublicRouteMiddleware from './middlewares/PublicRouteMiddleware';
import PrivateRouteMiddleware from './middlewares/PrivateRouteMiddleware';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import CarPage from './pages/Car/CarPage';
import { RoleCheckMiddleware } from './middlewares/RoleCheckMiddleware';
import CarManagePage from './pages/Car/CarManagePage';
import SearchPage from './pages/Home/SearchPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import RegisterPage from './pages/Login/RegisterPage';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;
const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <GoogleOAuthProvider clientId={clientId}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route element={<PublicRouteMiddleware />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Route>
              <Route element={<PrivateRouteMiddleware />}>
                <Route path="/search" element={<SearchPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route
                  element={
                    <RoleCheckMiddleware
                      allowedRoles={['SUPERADMIN', 'ADMIN']}
                    />
                  }
                >
                  <Route path="/car" element={<CarPage />} />
                  <Route path="/car/create" element={<CarManagePage />} />
                  <Route path="/car/:id" element={<CarManagePage />} />
                </Route>
              </Route>
            </Routes>
          </AuthProvider>
        </GoogleOAuthProvider>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
