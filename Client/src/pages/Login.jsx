import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import styles from './Styles/Login.module.css';

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const loginUser = async (e) => {
    e.preventDefault()
      const{email, password} = data
      try {
        const {data} = await axios.post('/login', {
          email, 
          password,
        });
        if(data.error) {
          toast.error(data.error)
        } else {
          setData({});
          navigate('/dashboard');
        }
      } catch (error) {
        
      }
  };
  
  return (
    <div className={styles.Login}>
      <h1>Sign In.</h1>
      <form onSubmit={loginUser}>
      <div>
        <a className="signApi">Google</a>
        <a className="signApi">Facebook</a>
      </div> 
      <h2>Or</h2>
          <input id="e-Mail" type='text' placeholder='E-mail' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
          <input id="password" type='text' placeholder='Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
          <button type='submit'>Sign In.</button>
          <h3>Don't have an account?</h3>
          <a>Register Now</a>
      </form>
    </div>
  );
}
