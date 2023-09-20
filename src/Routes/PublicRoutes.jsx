import UserLogin from "../Pages/UserLogin/Layout/UserLogin"
import Login from "../Pages/UserLogin/Pages/Login/Login"
import Signup from "../Pages/UserLogin/Pages/Login/Signup"

const PublicRoutes={
    path:'/',
    element:<UserLogin/>,
    children:[
        {path:'login',element:<Login/>},
        {path:'signup',element:<Signup/>}
    ]
}

export default PublicRoutes