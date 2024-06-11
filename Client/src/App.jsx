import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';



axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
     <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
        <Routes>
           <Route path='/' element={ <Login/> } />
           <Route path='/Home' element={ <Home/> } />
           <Route path='/register' element={ <Register/> } />
           <Route path='/dashboard' element={ <Dashboard/> } />
        </Routes>
    </UserContextProvider>
  );
};

export default App;
