import { Link } from "react-router-dom"

export default function Navbar() {
  return (
   <nav>
    <Link to='/Home'>Home</Link>
    <Link to='/login'>login</Link>
    <Link to='/register'>register</Link>
   </nav>
  )
}

