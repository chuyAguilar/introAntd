import React from "react";
import { useRoutes } from 'react-router-dom';

import HomePage from "../pages/login/Home";
import Login from "../pages/login";
import Sign from "../pages/login/SignUp";
import { useAuth } from "../hooks/useAuth";

const AppRoutes = () => {
    const { user } = useAuth();

    let routes = useRoutes([
        { path: '/login', element: <Login /> },
        { path: '/', element: user ? <HomePage /> : <Login/> },
        { path: '/signUp', element: <Sign /> },

    ])
    return routes;
}

export default AppRoutes;