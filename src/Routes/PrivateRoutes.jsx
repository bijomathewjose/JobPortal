import AuthRoutes from "../Pages/Authenticated/Auth"


const PrivateRoutes={
    path:'/',
    element:<AuthRoutes/>,
    children:[
        {path:'Home',element:<>hi</>}
    ]
}


export default PrivateRoutes