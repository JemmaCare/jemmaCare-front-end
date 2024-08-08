import jemma from "../images/jemmaLogo.png"
import { Link } from "react-router-dom"
import K from "../constants"


const Navbar = () => {
    return (
        <div>
        <div className="flex justify-between px-5p py-10">
          <span className="w-10 h-10"><img src={jemma} alt="logo" /></span>
          <div className="flex gap-x-16">
            {
              K.NAVLINKS.map(
                (item,index) => {
                  return <Link key={index} to={item.path}>{item.name}</Link>
                }
              )
            }
          </div>
        </div>
        </div>
      )
}

export default Navbar