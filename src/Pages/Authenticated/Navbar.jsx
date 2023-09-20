import {} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex',gap:'10px'}}>
        <Link to="/Home">A</Link>
        <h1>Navbar</h1>
    </div>
  )
}

export default Navbar