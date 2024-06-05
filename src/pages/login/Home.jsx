import React from 'react';
import { Layout, Menu, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom'


const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/SignUp');
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Registrate</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ marginTop: '50px' }}>
          <Title>Welcome to My Home Page</Title>
         <Button type="primary" size="large" style={{ marginTop: '20px' }} onClick={handleLoginClick}>
            Login
          </Button>
          <Button type="primary" size="large" style={{ marginTop: '20px' }} onClick={handleSignUpClick}>
            Registrate
          </Button>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>My App ©2024 Created by Jesús Aguilar</Footer>
    </Layout>
  );
};

export default HomePage;
