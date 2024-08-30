import React from 'react';
import { Outlet } from 'react-router-dom';

function PublicRoutes() {
    if (!isAuthenticated) {
        return <Outlet />
    }
    return <Navigate to="/" />
}

export default PublicRoutes;