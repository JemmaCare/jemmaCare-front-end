import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import LandingPage from "./assets/pages/landingPage";
import Therapists from "./assets/pages/therapists";
import SignUp from "./assets/pages/auth/signUp";
import Login from "./assets/pages/auth/login";
import GoogleSignup from "./assets/pages/googleSignup";

import Support from "./assets/pages/supportForm";
import Articles from "./assets/pages/adminDashboard/pages/articles";

import AddArticles from "./assets/pages/adminDashboard/pages/addArticles";
import AddSupport from "./assets/pages/adminDashboard/pages/addSupport";
import AddReviews from "./assets/pages/adminDashboard/pages/addReviews";
import AddUser from "./assets/pages/adminDashboard/pages/addUser";
import AddTherapist from "./assets/pages/adminDashboard/pages/addTherapist";
import DashboardLayout from "./assets/pages/adminDashboard/layouts";
import Overview from "./assets/pages/adminDashboard/pages/overview";
import Reviews from "./assets/pages/adminDashboard/pages/reviews";


import TherapistLogin from "./assets/pages/auth/therapistLogin";


import RootLayout from "./assets/layouts/rootLayout";
import Services from "./assets/pages/services";
import About from "./assets/pages/about";
import Testimonials from "./assets/pages/testimonials";
import Esther from "./assets/pages/pages/esther";
import Ruth from "./assets/pages/pages/ruth";
import Rich from "./assets/pages/pages/rich";
import Reggie from "./assets/pages/pages/reggie";
import Owarewaa from "./assets/pages/pages/owarewaa";
import Nuna from "./assets/pages/pages/nuna";
import Nhyira from "./assets/pages/pages/nhyira";
import Martin from "./assets/pages/pages/martin";
import Marigold from "./assets/pages/pages/marigold";
import Kafui from "./assets/pages/pages/kafui";
import Josh from "./assets/pages/pages/josh";
import Gracie from "./assets/pages/pages/gracie";





function App() {
  const router = createBrowserRouter(
    [
      { path: "/",
        element:
        <RootLayout/>,
        children: [
          {

            index: true,
    
            element: <LandingPage />,
          },
          {
            path: "about", element: <About/>
          },
          {
            path: "/services", element: <Services/>
          },
          {
            path: "/support", element: <Support />
          },
          {
            path: "/articles", element: <Articles />
          },
          {
            path: "/testimonials", element: <Testimonials/>
          },
        ]
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
        pah: "/therapistlogin",
        element: <TherapistLogin />
      },
      {
        path: "/google", element: <GoogleSignup />
      },
      {
        path: "/admdashboard", element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Overview />
          },
          {
            path: "articles",
            element: <Articles />
          },
          {
            path: "articles/add",
            element: <AddArticles />
          },
          {
            path: "support",
            element: <Support />
          },
          {
            path: "support/add",
            element: <AddSupport />
          },
          {
            path: "review",
            element: <Reviews />
          },
          {
            path: "review/add",
            element: <AddReviews />
          },
          {
            path: "user/add",
            element: <AddUser />
          },
          {
            path: "therapists",
            element: <Therapists />
          },
          {
            path: "therapists/add",
            element: <AddTherapist />
          },

        ]
      },
      {
        path: "esther",
        element: <Esther/>
      },
      {
        path: "gracie",
        element: <Gracie/>
      },
      {
        path: "josh",
        element: <Josh/>
      },
      {
        path: "kafui",
        element: <Kafui/>
      },
      {
        path: "marigold",
        element: <Marigold/>
      },
      {
        path: "martin",
        element: <Martin/>
      },
      {
        path: "nhyira",
        element: <Nhyira/>
      },
      {
        path: "nuna",
        element: <Nuna/>
      },
      {
        path: "owarewaa",
        element: <Owarewaa/>
      },
      {
        path: "reggie",
        element: <Reggie/>
      },
      {
        path: "rich",
        element: <Rich/>
      },
      {
        path: "ruth",
        element: <Ruth/>
      },


    ],


  )


  return <RouterProvider router={router} />


}




export default App