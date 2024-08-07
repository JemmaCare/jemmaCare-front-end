import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import LandingPage from "./assets/pages/landingPage";
import OurServices from "./assets/pages/ourServices";
import Therapists from "./assets/pages/therapists";
import Contact from "./assets/pages/contact";
import SignUp from "./assets/pages/auth/signUp";
import Login from "./assets/pages/auth/login";
import GoogleSignup from "./assets/pages/googleSignup";
import ServicesPage from "./assets/pages/servicesPage";





function App() {
  const router = createBrowserRouter(
    [

      {
        index: true,

        element: <LandingPage />,
      },

      {
        path: "ourservices",
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

      {
        path: "/login", element: <Login />

      },
      {
        path: "/google", element: <GoogleSignup />
      },
      {
        path: "/services", element: <ServicesPage />
      },

    ],


  )


  return <RouterProvider router={router} />


}




export default App