import { Navigate } from 'react-router-dom'
import Layout from './Layout/Layout'

const AuthRoutes = () => {
  
  const isAuthenticated= JSON.parse(localStorage.getItem('isAuthenticated'))
  if(isAuthenticated ) return <Layout/>
  return <Navigate to="/login" replace />
}

export default AuthRoutes