
import { Link } from "react-router-dom"
import jemmaSignUp from "../../images/jemmaSignUp.png"

const SignUp = () => {
  return (
    <div className=" flex items-center justify-center rounded-xl">
      <div className="flex flex-row shadow-lg m-48 ">

        <div className="">
          <form className="[h-500px] w-[500px] flex flex-row place-content-center bg-[#337eff] font-serif" >
            <div>
              <div className="text-center  text-3xl p-3 pt-5">
                <h1>Sign Up</h1>
              </div>
              <div>
                <Link to="/google" >Signup with google
                </Link>
              </div>
              <label
                htmlFor="firstName"
                className="block text-black mb-1 ml-4 "
              >
                First name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your first name"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-[2px] rounded-md"

              />

              <label
                htmlFor="lastName"
                className="block text-black mb-1 ml-4"
              >
                Last name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your last name"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg"

              />

              <label
                htmlFor="otherNames"
                className="block text-black mb-1 ml-4"
              >
                Other names
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter other names"
                className=" bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg"

              />
              <label
                htmlFor="userName"
                className="block text-black mb-1 ml-4"
              >
                Username
              </label>
              <input
                type="text"
                id="true"
                placeholder="username"
                className=" bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg"

              />

              <div className="flex flex-col w-full space-y-1"></div>

              <label
                htmlFor="email"
                className="block text-black mb-1 ml-4"
              >
                Email
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your email"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg"


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
                placeholder="Enter your password"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg"

              />


              <div className="flex items-start p-4">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border " />
                </div>
                <div className="ml-3 text-sm  ">
                  <label htmlFor="terms" className="font-light text-black">I accept the <Link className="font-medium text-primary-600 hover:underline " to="#">Terms and Conditions</Link> </label>
                </div>
              </div>
              <div className="flex pl-10">
                <button type="submit" className="text-center text-[#337eff] m-4 pb-8 h-10 w-40 px-3 py-2 bg-white border-2 rounded-3xl hover:bg-gray-400">Sign Up </button>
              </div>

            </div>
          </form>
        </div>
        <div className="flex flex-col place-content-center">
          <div>
            <img src={jemmaSignUp} alt="signing" />
          </div>
          <div>
            <Link to="/login" className="text-[#337eff] underline pl-32">
              Already have an account? Login
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default SignUp