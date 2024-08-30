import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../pages/SignIn/index.jsx';
import Characters from '../pages/Characters/index.jsx';
import Error from '../pages/Error/index.jsx';
import AuthContext from '../context/AuthContext';

function PrivateRoutes({ children }) {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}

function PublicRoutes({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Navigate to="/" /> : children;
}

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<PublicRoutes><SignIn /></PublicRoutes>} />
      <Route path="/" element={<PrivateRoutes><Characters /></PrivateRoutes>} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
}

export default Router;