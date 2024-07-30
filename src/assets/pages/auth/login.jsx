
import jemmaSign from "../../images/jemmaSign.png"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex items-center justify-center overflow-y-hidden" >
    <div className="flex flex-row shadow-lg m-32 ">
      <div>
        <form className=" flex place-content-center text-xl font-serif">
          <div className="mx-28">
            <div className="m-9">
              <h1>SIGN IN</h1>
              <p>sign in with google <br /> or use your email</p>
            </div>

            <label
              htmlFor="email"
              className="block text-black mb-1 ml-4"
            >
              Email/Username
            </label>
            <input
              type="text"
              id="email"
              placeholder="email/username"
              className="bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg "
            />
           
            <label
              htmlFor="password"
              className="block text-black mb-1 ml-4"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className=" bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg"
             
            />
           
            <div className=" flex pl-10">
              <div className="text-center text-white my-8 pb-8 h-10 w-40 px-3 py-2 bg-[#337eff] border-2 rounded-3xl hover:bg-black">
                <button type="submit">Login</button>
              </div>
            </div>
          </div>
        </form>

      </div>

      <div className="bg-[#337eff] place-content-center">
        <div className="text-center text-white font-mono text-lg m-20">
          <h1> Hello, Friend!</h1>
          <p>Enter your personal details <br />to start your journey with us</p>
          <Link to="/signup" className="underline">
            SIGN UP
          </Link>
        </div>
      </div>
      <div>
      <img src={jemmaSign} alt="signing" className="bottom-right-image "/>
    </div>
    </div>
    
  </div>
  )
}

export default Login