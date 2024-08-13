
import jemmaSign from "../../images/jemmaSign.png"
import { Link } from "react-router-dom"


const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen overflow-hidden">
        <div className="flex flex-row bg-white rounded-lg">
          <div className="w-full md:w-1/2">
            <form className="bg-[#10CC9F] flex items-center justify-center h-full p-8 text-xl font-serif">
              <div className="w-3/4">
                <div className="mb-8 text-center">
                  <h1 className="text-3xl font-bold text-white">SIGN IN</h1>
                  <p className="text-white mt-2">  Sign in with Google<br />or use your email</p>
                </div>
  
                <label htmlFor="email" className="block text-white mb-2 ml-4">
                  Email/Username
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="email/username"
                  className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg mb-4"
                />
  
                <label htmlFor="password" className="block text-white mb-2 ml-4">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg mb-8"
                />
  
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-center text-[#10CC9F] my-4 h-10 w-40 px-3 py-2 bg-white border-2 rounded-3xl hover:bg-gray-400"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className=" md:w-1/2">
            <img src={jemmaSign} alt="signing" className="h-full object-cover rounded-r-lg" />
            <Link to="/admsignup">SignUp here</Link>
          </div>
        </div>
      </div>
  )
}

export default Login