import AuthRoutes from "../Pages/Authenticated/Auth"
import Search from "../Pages/Authenticated/Pages/Search"


const PrivateRoutes={
    path:'/',
    element:<AuthRoutes/>,
    children:[
        {path:'Home',element:<Search/>},
        {path:'job/:id',element:</>}
    ]
}


export default PrivateRoutes