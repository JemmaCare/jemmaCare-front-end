import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import LandingPage from "./assets/pages/landingPage";
import OurServices from "./assets/pages/ourServices";
import Therapists from "./assets/pages/therapists";
import Contact from "./assets/pages/contact";
import RootLayout from "./assets/layouts/rootLayout";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        children: [
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


        ]
      }
      
    ])


    return <RouterProvider router={router} />


}




export default App