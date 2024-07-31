import jemma from "../images/jemmaLogo.png"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="flex place-content-evenly items-center">
            <div className="flex items-center">
                <img className="w-16 h-16" src={jemma} alt="" />
                <Link to="/login" className="text-white bg-[#337eff] py-2 px-6 rounded">
            Login
          </Link>
          <Link to="/signUp" className="text-white bg-[#337eff] py-2 px-6 rounded">
        Get started
      </Link>
                
            </div>
        </div>
    )
}

export default Navbar