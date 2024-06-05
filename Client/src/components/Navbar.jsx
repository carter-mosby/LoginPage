import { Link } from "react-router-dom"

export default function Navbar() {
  return (
   <nav>
    <Link to='/Home'>Home</Link>
    <Link to='/Dashboard'>Profile</Link>
    <Link to='/Checkout'>cart</Link>
   </nav>
  )
}

