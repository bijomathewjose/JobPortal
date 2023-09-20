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
        <Navbar/>
        <div onClick={logout} style={{aspectRatio:'1',width:'fit-content',backgroundColor:'white',color:'black',textAlign:'center'}}>Log Out</div>
        <div><Outlet/></div>
    </div>
  )
}

export default Layout