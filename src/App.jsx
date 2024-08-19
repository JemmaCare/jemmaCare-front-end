import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import RootLayout from "./layouts/rootLayout";
import LandingPage from "./pages/landingPage";
import About from "./pages/about";
import Services from "./pages/services";
import Support from "./pages/supportForm"
import Article from "./pages/article";
import Testimonials from "./pages/testimonials";
import Therapist from "./pages/therapist";
import SignUp from "./pages/auth/signUp";
import Login from "./pages/auth/login";
import GoogleSignup from "./pages/googleSignup";
import AdmDashboardLayout from "./pages/adminDashboard/layouts/index";
import Overview from "./pages/adminDashboard/pages/overview";
import Articles from "./pages/adminDashboard/pages/articles";
import AddArticles from "./pages/adminDashboard/pages/addArticles";
import SupportGroup from "./pages/adminDashboard/pages/supportGroup";
import AddSupport from "./pages/adminDashboard/pages/addSupport";
import Testimonial from "./pages/adminDashboard/pages/testimonial";
import AddTestimonial from "./pages/adminDashboard/pages/addTestimonial";
import User from "./pages/adminDashboard/pages/user";
import AddUser from "./pages/adminDashboard/pages/addUser";
import Therapists from "./pages/adminDashboard/pages/therapists";
import AddTherapists from "./pages/adminDashboard/pages/addTherapists";
import OnboardingForms from "./pages/onboardingForms";
import TherapistOnboarding from "./pages/therapistOnboarding";
import TherapistLogin from "./pages/auth/therapistLogin";
import Appointment from "./pages/appointment";
import DateTimePicker from "./pages/dateTimePicker";
import CommunicationMethod from "./pages/communicationMethod";
import Bipolar from "./pages/bipolar";
import TherapistDetails from "./pages/therapistDetails";

  const router = createBrowserRouter(
    [
      { path: "/",
        element:
        <RootLayout/>,
        children: [
          {

            index: true,
    
            element: <LandingPage/>,
          },
          {
            path: "about", element: <About/>
          },
          {
            path: "/services", element: <Services/>
          },
          {
            path: "/supportform", element: <Support/>
          },
          {
            path: "/article", element: <Article />
          },
          {
            path: "/testimonials", element: <Testimonials/>
          },
          {
            path: "all-therapists",
            element: <Therapist/>,
          },
        ]
      },
     
      { path: "/signup", element: <SignUp/> },

      {
        path: "/login", element: <Login/>

      },
      {
        path: "/google", element: <GoogleSignup/>
      },
      {
        path: "/admdashboard", element: <AdmDashboardLayout />,
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
            path: "supportgroup",
            element: <SupportGroup/>
          },
          {
            path: "support/add",
            element: <AddSupport />
          },
          {
            path: "testimonial",
            element: <Testimonial />
          },
          {
            path: "testimonial/add",
            element: <AddTestimonial />
          },
          {
            path: "user",
            element: <User/>
          },
          {
            path: "user/add",
            element: <AddUser/>
          },
          {
            path: "therapists",
            element: <Therapists/>
          },
          {
            path: "therapists/add",
            element: <AddTherapists/>
          },

        ]
      },
      {
        path: "all-therapists/:id",
        element: <TherapistDetails/>
      },
      
      {
        path: "onboarding",
        element: <OnboardingForms/>
      },
      {
        path: "therapistonboarding",
        element: <TherapistOnboarding/>
      },
      {
        path: "therapistlogin",
        element: <TherapistLogin/>
      },
      {
        path: "appointment",
        element: <Appointment/>
      },
      {
        path: "datetime",
        element: <DateTimePicker/>
      },
      {
        path: "communication",
        element: <CommunicationMethod/>
      },
      {
        path: "bipolar",
        element: <Bipolar/>
      },


    ])

  function App() {
  return (
  <>
  <RouterProvider router={router} />

  </>
  )

}




export default App