import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs';
import RootLayout from './RootLayout';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },  
      {
        path: "about-us",
        element: <AboutUs />
      },
      {
        path: "contact-us",
        element: <ContactUs />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <SignUp />
      },
    
    ]
  }
])


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App