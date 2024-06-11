import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button";
import ButtonGradient from "../assets/svg/ButtonGradient"

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
    <div>
      <h1>Sign In.</h1>
      <form onSubmit={loginUser}>
      <div>
        <a className="signApi">Google</a>
        <a className="signApi">Facebook</a>
      </div> 
      <h2>Or</h2>
          <input id="e-Mail" type='text' placeholder='E-mail' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
          <input id="password" type='text' placeholder='Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
          <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Button className='mt-10' type='submit'>
              Sign In.
            </Button>
          </div>
          <ButtonGradient />
          <h3>Don't have an account?</h3>
          <a>Register Now</a>
      </form>
    </div>
  );
}
