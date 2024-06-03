// Login.jsx

import React from 'react';
import LayoutComponent from "../../components/Layout/LayoutComponent";
import Img from '../../components/Images';
import Formlogin from '../../components/FornLogin';

const Login = () => {
    return (
        <LayoutComponent
            leftColSize={{ xs: 0, sm: 0, md: 8, lg: 6 }}
            rightColSize={{ xs: 24, sm: 24, md: 16, lg: 18 }}
            leftContent={<Img />}
            rightContent={<Formlogin/>}
        />
    );
}

export default Login;
