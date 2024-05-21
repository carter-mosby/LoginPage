import { useState } from "react"
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }) 


  const registerUser =async (e) => {
    e.preventDefault();
    const { userName, firstName, lastName, email, password, confirmPassword } = data
    try {
      const {data} = await axios.post('/register', {
        userName, firstName, lastName, email, password, confirmPassword
      })
      if(data.error){
        toast.error(data.error);
      } else { 
        setData({})
        toast.success('Login Successful.')
        navigate('/Login')
      }  
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>UserName</label>
          <input type='text' placeholder='Enter UserName' value={data.userName} onChange={(e) => setData({...data, userName: e.target.value})}/>
        <label>First Name</label>
          <input type='text' placeholder='Enter FirstName'value={data.firstName} onChange={(e) => setData({...data, firstName: e.target.value})}/>
        <label>Last Name</label>
          <input type='text' placeholder='Enter LastName'value={data.lastName} onChange={(e) => setData({...data, lastName: e.target.value})}/>
        <label>Email</label>
          <input type='text' placeholder='Enter Email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        <label>Password</label>
          <input type='text' placeholder='Enter PassWord' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <label>Confirm Password</label>
          <input type='text' placeholder='Confirm PassWord' value={data.confirmPassword} onChange={(e) => setData({...data, confirmPassword: e.target.value})}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
