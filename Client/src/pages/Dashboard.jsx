import { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const {user} = useContext(UserContext);
    return (
    <div>
      <Navbar/>
      <h1>Dashboard</h1>
      {!!user && (<h2>{user.userName}</h2>)}
    </div>
  )
}
