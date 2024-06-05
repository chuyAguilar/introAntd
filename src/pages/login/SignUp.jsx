// Login.jsx

import React from 'react';
import LayoutComponent from "../../components/Layout/LayoutComponent";
import {Img1} from '../../components/Images';
import FormRegister from '../../components/FormRegister/FormRegister.jsx';


const Sign = () => {
    return (
        <LayoutComponent
            leftColSize={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            rightColSize={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            leftContent={<Img1 />}
            rightContent={<FormRegister/>}
        />
    );
}

export default Sign;
