
import OurServices from "./ourServices"

import { Link } from "react-router-dom"
const LandingPage = () => {
    return (
      <div className="flex flex-col w-auto h-screen">
      <div className=" bg-blue-400 w-auto h-screen">
          <h1>We are a totality of our thoughts</h1>
          <p>Don't underestimate your thoughts</p>
      </div>
      <div className="bg-blue-200">
          <OurServices/>
          <Link to="/signUp" className="text-white bg-[#337eff] py-2 px-6 rounded">
        Get started
      </Link>
      </div>
  </div>
  
    )
  }
  
  export default LandingPage