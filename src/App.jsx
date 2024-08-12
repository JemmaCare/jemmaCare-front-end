import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import LandingPage from "./assets/pages/landingPage";
import Therapists from "./assets/pages/therapists";
import SignUp from "./assets/pages/auth/signUp";
import Login from "./assets/pages/auth/login";
import GoogleSignup from "./assets/pages/googleSignup";
import LandingPageTwo from "./assets/pages/landingPageTwo";
import About from "./assets/pages/about";
import Support from "./assets/pages/supportForm";
import Articles from "./assets/pages/adminDashboard/pages/articles";

import AddArticles from "./assets/pages/adminDashboard/pages/addArticles";
import AddSupport from "./assets/pages/adminDashboard/pages/addSupport";
import AddReviews from "./assets/pages/adminDashboard/pages/addReviews";
import AddUser from "./assets/pages/adminDashboard/pages/addUser";
import AddTherapist from "./assets/pages/adminDashboard/pages/addTherapist";
import DashboardLayout from "./assets/pages/adminDashboard/layouts";
import Overview from "./assets/pages/adminDashboard/pages/overview";





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
        path: "/support", element: <Support />
      },
      {
        path: "/articles", element: <Articles />
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

    ],


  )


  return <RouterProvider router={router} />


}




export default App