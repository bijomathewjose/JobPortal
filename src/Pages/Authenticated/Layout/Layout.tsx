import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'

const Layout = () => {
    const navigate=useNavigate()
const logout=()=>{
    localStorage.removeItem('isAuthenticated')
    navigate('/login')
}
  return (
    <div>
        <div onClick={logout} style={{color:'white',textAlign:'center'}}>Log Out</div>
        <div><Outlet/></div>
    </div>
  )
}

export default Layout