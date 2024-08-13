import { Link } from "react-router-dom";
import jemmaSignUp from "../../images/jemmaSignUp.png";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10 bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-xl bg-white shadow-md">
        
        {/* Form Section */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-6 bg-[#10CC9F]">
          <div className="text-center text-3xl mb-5 text-white">
            <h1>Sign Up</h1>
          </div>
          <form className="space-y-4">
            <div>
              <Link to="/google" className="block text-center text-white mb-4">
                Signup with Google
              </Link>
            </div>
            <div>
              <label htmlFor="firstName" className="block text-white mb-1">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-[2px] rounded-md"
              />
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
              />
            </div>
            <div>
              <label htmlFor="otherNames" className="block text-white mb-1">
                Other names
              </label>
              <input
                type="text"
                id="otherNames"
                placeholder="Enter other names"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-[2px] rounded-md"
              />
            </div>
            <div>
              <label htmlFor="userName" className="block text-white mb-1">
                Username
              </label>
              <input
                type="text"
                id="userName"
                placeholder="Username"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-[2px] rounded-md"
              />
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
              />
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
              />
            </div>
            <div className="flex items-start p-4">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-white">
                I accept the <Link className="font-medium text-white underline" to="#">Terms and Conditions</Link>
              </label>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="text-[#10CC9F] text-lg font-bold m-4 pb-8 h-10 w-40 px-3 py-2 bg-white border-2 rounded-3xl hover:bg-gray-300">
                Sign Up
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
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
