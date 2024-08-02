import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import LandingPage from "./assets/pages/landingPage";
import OurServices from "./assets/pages/ourServices";
import Therapists from "./assets/pages/therapists";
import Contact from "./assets/pages/contact";
import SignUp from "./assets/pages/auth/signUp";
import Login from "./assets/pages/auth/login";





function App() {
  const router = createBrowserRouter(
    [
        
          {
            index: true,

            element: <LandingPage />,
          },
         
          {
            path: "services",
            element: <OurServices />,
          },

          {
            path: "therapists",
            element: <Therapists />,
          },

          {
            path: "contact",
            element: <Contact />
          },
          { path: "/signup", element: <SignUp /> },
          
          { path: "/login", element: <Login /> },

    ],


  )


  return <RouterProvider router={router} />


}




export default App