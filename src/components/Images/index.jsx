// ../../components/Images/index.jsx

import React from 'react';
import img1 from '../../assets/img1.jpg';
import './img.css';

const Img = () => {
    return (
        <div className='content-left'>
            <img src={img1} alt='Placeholder image'/>
            <h1 className='title'>Izquierda</h1>
        </div>
    );
};

export default Img;
