import './App.css'
import { ConfigProvider } from 'antd';
//import LayoutComponent from './components/Layout/LayoutComponent';
import Login from './pages/login';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import { AuthProvider } from './Context/AuthContext.jsx';

function App() {

  return (
    <AuthProvider>

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#7A83E1',
          },
        }}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ConfigProvider>
    </AuthProvider>

  )
}

export default App
