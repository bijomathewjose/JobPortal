import {} from "react";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";




export const routes=[
    PrivateRoutes,
    PublicRoutes,
    {
        path:'*',
        element:<h1>404</h1>
    }
]

