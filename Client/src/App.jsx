import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';
import Checkout from './pages/Checkout';


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <Navbar />
        <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
          <Routes>
            <Route path='/home' element={ <Home/> } />
            <Route path='/login' element={ <Login/> } />
            <Route path='/register' element={ <Register/> } />
            <Route path='/dashboard' element={ <Dashboard/> } />
          </Routes>
    </UserContextProvider>
  );
};

export default App;
