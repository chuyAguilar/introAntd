import React from "react";
import { useRoutes } from 'react-router-dom';

import HomePage from "../pages/login/Home";
import Login
    from "../pages/login";

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/login', element: <Login /> },
        { path: '/', element: <HomePage /> },

    ])
    return routes;
}

export default AppRoutes;