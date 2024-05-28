import { useContext } from 'react'
import { UserContext } from '../../context/userContext';

export default function Dashboard() {
  const {user} = useContext(UserContext);
    return (
    <div>
      <h1>Dashboard</h1>
      {!!user && (<h2>{user.userName}</h2>)}
    </div>
  )
}
