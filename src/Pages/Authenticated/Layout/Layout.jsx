import { Outlet, useNavigate } from 'react-router-dom'
import Style from './Layout.module.css'
const Layout = () => {
    const navigate=useNavigate()
  const logout=()=>{
      localStorage.removeItem('isAuthenticated')
      navigate('/login')
  }
  return (
    <div className={Style.container}>
        <div onClick={logout} className={Style.logout}>Log Out</div>
        <Outlet/>
    </div>
  )
}

export default Layout