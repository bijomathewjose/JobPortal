import AuthRoutes from "../Pages/Authenticated/Auth"
import Job from "../Pages/Authenticated/Pages/Job"
import Search from "../Pages/Authenticated/Pages/Search"


const PrivateRoutes={
    path:'/',
    element:<AuthRoutes/>,
    children:[
        {path:'Home',element:<Search/>},
        {path:'Home/Job/:id',element:<Job/>},
    ]
}


export default PrivateRoutes