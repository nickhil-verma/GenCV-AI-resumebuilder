import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoutes';
function RefrshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsAuthenticated(true);
        } else {
            if (location.pathname !== '/login' && location.pathname !== '/signup') {
                navigate('/login', { replace: true, state: { from: location.pathname } });
            }
        }
    }, [location, navigate, setIsAuthenticated]);

    return null;
}

export default RefrshHandler;
