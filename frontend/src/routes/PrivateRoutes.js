import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function PrivateRoute({ isAuthenticated }) {
    const location = useLocation();
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location.pathname }} replace />;
}

export default PrivateRoute;
