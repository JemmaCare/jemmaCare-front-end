import { MailIcon } from "lucide-react"
import { Link } from "react-router-dom"
import jemmaLogo from "../images/jemmaLogo.png"



const Footer = () => {
  return (
    <div>
       <footer className="bg-[#10CC9F] text-white py-4">
        <div className="flex flex-col items-center">
          <p className="font-serif text-xl text-center mb-4">Subscribe to our newsletters and articles</p>
          <div className="flex items-center bg-transparent border-2 rounded-full p-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Input email here"
              className="flex-grow text-black p-2 rounded-l-full border-none focus:outline-none"
            />
            <Link to="/articles" className="flex text-white bg-[#337eff] py-2 px-4 rounded">
            <MailIcon className="mr-2" /> <b>Articles/Newsletter</b> 
          </Link>
          </div>
          <div className="flex items-center mt-4">
            <img src={jemmaLogo} alt="logo" className="h-8 w-10 mr-2" />
            <p className="text-lg font-semibold">JemmaCare <b>@2024 JemmaCare, Inc.</b></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer