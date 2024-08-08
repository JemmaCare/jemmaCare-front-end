import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import LandingPage from "./assets/pages/landingPage";
import Therapists from "./assets/pages/therapists";
import SignUp from "./assets/pages/auth/signUp";
import Login from "./assets/pages/auth/login";
import GoogleSignup from "./assets/pages/googleSignup";
import LandingPageTwo from "./assets/pages/landingPageTwo";
import About from "./assets/pages/about";
import Support from "./assets/pages/support";
import Articles from "./assets/pages/articles";





function App() {
  const router = createBrowserRouter(
    [

      {
        index: true,

        element: <LandingPage />,
      },
      {
        path: "therapists",
        element: <Therapists />,
      },
      { path: "/signup", element: <SignUp /> },

      {
        path: "/login", element: <Login />

      },
      {
        path: "/google", element: <GoogleSignup />
      },
      {
        path: "/services", element: <LandingPageTwo />
      },
      { path: "/about", element: <About /> },
      {
        path: "/support", element: <Support/>
      },
      {
        path: "/articles", element: <Articles/>
      }

    ],


  )


  return <RouterProvider router={router} />


}




export default App