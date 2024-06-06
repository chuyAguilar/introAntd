import { Button, Form, Input, Card } from 'antd'
import './FormLogin.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import * as authservice from '../../Services/auth.js';
import { useAuth } from '../../hooks/useAuth.jsx';
import { useAuthData } from "../../Context/AuthContext"; 







const Formlogin = () => {

    const navigate = useNavigate();

    const user = {
        username: 'admin',
        Password: 'admin'
    }


    const handleHomeClick = () => {
        navigate('/');
    };

    // Estado de error de registro
    const [registerError, setRegisterError] = useState(false);

    // Estado de carga
    const [loading, setLoading] = useState(false);

    //Estado para el error de login
    const [loginError, setLoginError] = useState(false);

    const { login } = useAuthData();

    //Funcion para enviar los datos de el formulario
    const onFinish = async (values) => {
        setLoading(true); // Establece el estado de carga a true al enviar el formulario
        setLoginError(false);
        try {
            const response = await authservice.loginF(values.username,values.password);
            if(response && response.data){
                 console.log('Inicio de sesion exitoso', response.data);
            localStorage.setItem('token', response.data.generatedToken);
            login(response.data.generatedToken);
            navigate('/');
            }else{
                console.log('error en el inicio de sesion, respuesta inesperada');
            }
        } catch (error) {
            console.error('Error en el inicio de sesion', error.response?.data || error.message);
            setLoginError(true);
        } finally {
            setLoading(false); // Establece el estado de carga a false
        }
    };

    //Funcio para mostrar errores en el formulario
    const onFinishFailed = (errorInfo) => {
        setLoginError(true);
        console.log('FAILED', errorInfo);
    }

    //manejo de estado de autenticacion
    const useAuthDATA = useAuth();
    console.log(useAuthDATA);
    return (
        <Card
            tittle="Bienvenido!!"
            bordered="false"
            className="responsive-card"
        >
            <Form
                name='nomral-login'
                className='login-form'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item name="username"
                    rules={[
                        {
                            required: true,
                            message: "Porfavor ingrese usuario"
                        },
                    ]}>
                    <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Correo' />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Porfavor ingrese su contraseña"
                        }
                    ]}>
                    <input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Contraseña' />
                </Form.Item>
                <Form.Item>
                    {registerError && <p style={{ color: 'red' }}>Credenciales incorrectas, intentlo de nuevo.</p>}

                    <Button type='primary' htmlType='sunmit' className='login-form-button'>
                        Iniciar Sesion
                    </Button>
                </Form.Item>
            </Form>
            <Button type="primary" size="large" style={{ marginTop: '20px' }} onClick={handleHomeClick}>
                Regresar
            </Button>

        </Card>
    );
};

export default Formlogin;