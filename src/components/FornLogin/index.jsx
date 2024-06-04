import { Button, Form, Input, Card } from 'antd'
import './FormLogin.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'





const Formlogin = () => {

    //Funcion para enviar los datos de el formulario
    const onFinish = (values) => {
        const { username, Password } = values;
        if (username == user.username && Password == user.Password) {
            navigate('/');
        } else {
            onFinishFailed();
        }
        console.log('Success', values)
    }

    //Funcio para mostrar errores en el formulario
    const onFinishFailed = (errorInfo) => {
        setLoginError(true);
        console.log('FAILED', errorInfo);
    }

    //Estado para el error de login
    const [loginError, setLoginError] = useState(false);

    const user = {
        username: 'admin',
        Password: 'admin'
    }

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <card
            tittle="Bienvenido!!"
            bordered="false"
            classname="responsive-card"
        >
            <Form
                name='nomral-login'
                className='login-form'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item name="username"
                    rules={[
                        {
                            required: true,
                            message: "Porfavor ingrese usuario"
                        },
                    ]}>
                    <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Usuario' />
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
                    <Button type='primary' htmlType='sunmit' className='login-form-button'>
                        Iniciar Sesion
                    </Button>
                </Form.Item>
            </Form>

            <Button type="primary" size="large" style={{ marginTop: '20px' }} onClick={handleHomeClick}>
                Regresar
            </Button>

        </card>
    );
};

export default Formlogin;