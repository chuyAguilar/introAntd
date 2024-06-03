import React from 'react';
import { Button, Form, Input, Card } from 'antd'
import './FormLogin.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';


//Funcion para enviar los datos de el formulario
const onFinish = (values) => {
    console.log('Success', values)
}

//Funcio para mostrar errores en el formulario
const onFinishFailed = (errorInfo) => {
    console.log('FAILED', errorInfo);
}


const Formlogin = () => {
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

        </card>
    );
};

export default Formlogin;