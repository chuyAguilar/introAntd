import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import * as authservice from '../../Services/auth.js';
import { validatePassword } from '../../utils/utils.js';

const FormRegister = () => {
    const navigate = useNavigate();

    // Estado de error de registro
    const [registerError, setRegisterError] = useState(false);

    // Estado de carga
    const [loading, setLoading] = useState(false);

   

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setRegisterError(true);
    };

    const onFinish = async (values) => {
        setLoading(true); // Establece el estado de carga a true al enviar el formulario
        try {
            const response = await authservice.register(values.username,values.email,values.password);
            console.log('Registro exitoso', response.data);
            navigate('/login');
        } catch (error) {
            console.error('Error en el registro', error.response?.data || error.message);
        } finally {
            setLoading(false); // Establece el estado de carga a false
        }
    };

    return (
        <Card
            title="Bienvenido!!"
            bordered={false}
            className="responsive-card"
        >
            <Form
                name="normal_register"
                className="register-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su usuario',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder='Username' />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su correo',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder='Correo' />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su contraseña',
                        },
                    ]}
                >
                    <Input.Password prefix={<UserOutlined className="site-form-item-icon" />} placeholder='Contraseña' />
                </Form.Item>

                <Form.Item
                    name="password-repeat"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor repita su contraseña',
                        },
                        ({ getFieldValue }) => validatePassword({ getFieldValue }),
                    ]}
                >
                    <Input.Password prefix={<UserOutlined className="site-form-item-icon" />} placeholder='Repetir Contraseña' />
                </Form.Item>

                <Form.Item>
                    {registerError && <p style={{ color: 'red' }}>Fallo en el registro</p>}
                    <Button type='primary' htmlType="submit" className='login-form-button' loading={loading}>
                        Registrar
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default FormRegister;
