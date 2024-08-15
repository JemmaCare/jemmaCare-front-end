import jemmaSign from "../../images/jemmaSign.png";
import { Link, useNavigate } from "react-router-dom";
import google from "../../images/google.png";
import { useForm } from "react-hook-form";
import { apiLogin } from "../../../services/auth";
import { useState } from "react";
import { toast } from "react-toastify";


const Login = () => {
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
        password: data.password,
        email: data.email,
        
      };
      
      try {
        const res = await apiLogin(payload);
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
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row bg-white rounded-lg">
        <div className="w-full md:w-1/2">
          <form className="bg-[#10CC9F] flex flex-col items-center justify-center h-full p-8 text-xl font-serif" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-3/4">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-white">SIGN IN</h1>
              </div>

              <label htmlFor="email" className="block text-white mb-2 ml-4">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="email"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg mb-4"
                {
                  ...register("email", { required: "Email is not provided" })
                  }
              />
               {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
              <label htmlFor="password" className="block text-white mb-2 ml-4">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="password"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg mb-8"
                {
                  ...register("password", { required: "Password is not provided, minLength:8" })
                  }
             />
                {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-center text-[#10CC9F] my-4 h-10 w-40 px-3 py-2 bg-white border-2 rounded-3xl hover:bg-[#00B0FF] hover:text-white"
                >
                  Login
                </button>
              </div>
              <div className="flex items-center justify-center gap-3 border border-white w-3/4 max-w-xs p-2 mx-auto rounded-md mt-4">
                <img src={google} alt="google" className="w-8 h-8" />
                <Link to="/google" className="block text-white text-center">
                  Continue with Google
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          <img src={jemmaSign} alt="signing" className="h-full object-cover rounded-r-lg" />
          <Link to="/signup" className="text-[#10CC9F] underline text-center mt-4">
            SignUp here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
