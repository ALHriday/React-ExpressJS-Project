import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Coffees from './components/Coffees.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import PrivateRoute from './AuthProvider/PrivateRoute.jsx';
import About from './components/About.jsx';
import Error from './Error/Error.jsx';
import Home from './components/Home.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/coffees',
        element: <Coffees></Coffees>,
        loader: () => fetch('https://coffee-store-rosy.vercel.app/coffees')
      },
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/updateCoffee/:id',
        loader: ({params}) => fetch(`https://coffee-store-rosy.vercel.app/coffees/${params.id}`),
        element: <UpdateCoffee></UpdateCoffee>
      },
      {
        path: '/coffeeDetails/:id',
        loader: ({params}) => fetch(`https://coffee-store-rosy.vercel.app/coffees/${params.id}`),
        element: <CoffeeDetails></CoffeeDetails>
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/Register',
        element: <Register></Register>
      },
      {
        path: '/About',
        element: <PrivateRoute><About></About></PrivateRoute>
      }
    ]
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}> 
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
