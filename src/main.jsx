import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import Rockets from './components/Rockets.jsx'


const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    children: [
      {path:'/',element:<Dashboard/>},
      {path:'/dashboard',element:<Dashboard/>},
     
      {path:'/rockets',element:<Rockets/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
