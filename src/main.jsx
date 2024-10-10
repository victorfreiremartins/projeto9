import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './routes/Error/Error.jsx'
import Home from './routes/Home/Home.jsx'
import Produto from './routes/Produtos/Produto.jsx'

const router = createBrowserRouter([{
  path: '/', element: <App/>,
  errorElement: <Error/>,

  children:[
    {path: '/', element: <Home/>},
    {path: '/produto', element: <Produto/>},
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
