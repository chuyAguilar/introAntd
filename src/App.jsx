import './App.css'
import {ConfigProvider} from 'antd';
//import LayoutComponent from './components/Layout/LayoutComponent';
import Login from './pages/login';


function App() {

  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary : '#7A83E1',
      },
    }}>

    <Login></Login>
    </ConfigProvider>
  )
}

export default App
