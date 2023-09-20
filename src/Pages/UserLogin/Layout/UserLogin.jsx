import {  Navigate, Outlet, useNavigate } from 'react-router-dom'
import Style from './UserLogin.module.css'
const UserLogin = () => {
  const navigate=useNavigate()
  const isAuthenticated= JSON.parse(localStorage.getItem('isAuthenticated'))
  if(isAuthenticated ) return <Navigate to="/" replace/>
  return (
    <div className={Style.container}>
      <div className={Style.modal}>
      <Outlet/>
      </div>
    </div>
  )
}

export default UserLogin