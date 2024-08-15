import { Link, useNavigate } from "react-router-dom";
import jemmaSignUp from "../../images/jemmaSignUp.png";
import google from "../../images/google.png"
import { useForm } from "react-hook-form";
import { apiSignUp } from "../../../services/auth";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors } } = useForm();

    const onSubmit = async (data) => {
      console.log(data);
      setIsSubmitting(true)
      let payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        password: data.password,
        email: data.email,
        termsAndConditions: data.termsAndConditions,
      };
      
      try {
        const res = await apiSignUp(payload);
        console.log(res.data)
        toast.success(res.data.message)
        navigate("/onboarding")
        
      } catch (error) { 
        console.log(error)
        toast.error("An error occured")
      } finally {
        setIsSubmitting(false)
      }
    };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10 bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-xl bg-white shadow-md">


        <div className="flex flex-col justify-center w-full md:w-1/2 p-6 bg-[#10CC9F]">
          <div className="text-center text-3xl mb-5 text-white">
            <h1>Sign Up</h1>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

            <div>
              <label htmlFor="firstName" className="block text-white mb-1">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-[2px] rounded-md"
                {
                  ...register("firstName", { required: "First name is not provided" })
                  }
              />
              {errors.firstName && (<p className="text-red-500">{errors.firstName.message}</p>)}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-white mb-1">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-[2px] rounded-md"
                {
                  ...register("lastName", { required: "Last name is not provided" })
                  }
              />
              {errors.lastName && (<p className="text-red-500">{errors.lastName.message}</p>)}
            </div>
            
            <div>
              <label htmlFor="userName" className="block text-white mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-[2px] rounded-md"
                {
                  ...register("username", { required: "not provided, minLength: 8" })
                  }
              />
               {errors.username && (<p className="text-red-500">{errors.username.message}</p>)}
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-[2px] rounded-md"
                {
                  ...register("email", { required: "Email is not provided" })
                  }
              />
              {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
            </div>
            <div>
              <label htmlFor="password" className="block text-white mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-[2px] rounded-md"
                {
                  ...register("password", { required: "Password is not provided, minLength:8" })
                  }
              />
               {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
            </div>
            <div className="flex items-start p-4">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border"
                {
                  ...register("termsAndConditions", { required: "Please accept the terms and conditions" })
                  }
              />
              
              <label htmlFor="terms" className="ml-2 text-sm text-white">
                I accept the <Link className="font-medium text-white underline" to="#">Terms and Conditions</Link>
              </label>
            </div>
            {errors.termsAndConditions && (<p className="text-red-500">{errors.termsAndConditions.message}</p>)}
            <div className="flex justify-center">
              <button type="submit" className="text-[#10CC9F] text-lg font-bold m-4 pb-8 h-10 w-40 px-3 py-2 bg-white border-2 rounded-3xl hover:bg-[#00B0FF] hover:text-white">
                Sign Up
              </button>
            </div>
            <div className="flex items-center justify-center gap-3 border border-white rounded-md w-3/4 max-w-xs p-2 mx-auto">
              <img src={google} alt="google" className="w-8 h-8" />
              <Link to="/google" className="block text-white text-center">
                Signup with Google
              </Link>
            </div>

          </form>
        </div>


        <div className="flex flex-col justify-center w-full md:w-1/2 p-6">
          <div className="flex justify-center">
            <img src={jemmaSignUp} alt="signing" className="max-w-full h-auto" />
          </div>
          <div className="text-center mt-4">
            <Link to="/login" className="text-[#10CC9F] underline">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
