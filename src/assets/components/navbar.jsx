import jemma from "../images/jemmaLogo.png"
import Button from "./button"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <img className="w-16 h-16" src={jemma} alt="" />
                <button className="border-white bg-transparent">Login</button>
                <Button />
            </div>
        </div>
    )
}

export default Navbar