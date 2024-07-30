import jemma from "../images/jemmaLogo.png"
import Button from "./button"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <img className="w-16 h-16" src={jemma} alt="" />
                <Link to="/login" className="text-white bg-[#337eff] py-2 px-6 rounded">
            Login
          </Link>
                <Button />
            </div>
        </div>
    )
}

export default Navbar