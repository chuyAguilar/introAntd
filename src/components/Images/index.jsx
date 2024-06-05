// ../../components/Images/index.jsx

import React from 'react';
import img from '../../assets/img.jpg';
import img1 from '../../assets/img1.jpg';

import './img.css';

const Img = () => {
    return (
        <div className='content-left'>
            <img src={img} alt='Placeholder image'/>
            <h1 className='title'>Izquierda</h1>
        </div>
    );
};


const Img1 = () => {
    return (
        <div className='content-left'>
            <img src={img1} alt='Placeholder image'/>
            <h1 className='title'>Bienvenido!</h1>
        </div>
    );
};



export { Img, Img1 };
