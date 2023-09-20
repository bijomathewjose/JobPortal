import {  } from 'react'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './Routes/MainRoute'

function App() {
  const router=createBrowserRouter(routes)
  return <RouterProvider router={router}/>
}

export default App
