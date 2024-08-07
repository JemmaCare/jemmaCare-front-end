import { Mail } from "lucide-react"
import { ArrowBigRight } from "lucide-react"
import jemmaLogo from "../images/jemmaLogo.png"
import bgImageOne from "../images/bgImageOne.png"
import { Link } from "react-router-dom"
const LandingPage = () => {
    return (
      <div className="flex flex-col overflow-x-hidden min-h-screen">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={jemmaLogo} alt="logo" className="h-8 w-10 mr-2" />
          <p className="text-lg font-semibold text-black">JemmaCare</p>
        </div>
        <Link to="/signup" className="flex items-center text-white bg-[#337eff] py-2 px-4 rounded">
          <ArrowBigRight className="mr-2" /> Login/Get Started
        </Link>
      </header>
      <div className="w-screen relative flex-grow">
        <img src={bgImageOne} alt="background image" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-75 p-4">
          <h1 className="text-4xl font-bold mb-4">We're Here Together</h1>
          <p className="text-lg mb-6"></p>
          <Link to="/signup" className="text-white bg-[#337eff] py-2 px-6 rounded">
            Login/Get Started
          </Link>
        </div>
      </div>
      <div className="bg-white text-[#337eff] py-4">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-[#10CC9F]">About Us</h1>
          <p className="font-serif text-xl text-center mb-4">JemmaCare offers Africans a seamless platform to <br /><b className="text-black">connect with qualified therapists, inspired by my personal journey through postpartum <br/> </b> depression and the invaluable support from my sister, <br/><b className="text-[#10CC9F]">a medical doctor and a dedicated mental health advocate.<br/></b>Our mission is to provide accessible, <br/>culturally sensitive mental health resources, and professional guidance, <br/>ensuring no one has to navigate their mental health challenges alone. <br/>We strive to break the stigma surrounding mental health in Africa, <br/>fostering a supportive community that empowers individuals to <br/>seek help and thrive. Join us in transforming mental health care, one connection at a time.</p>
          
        </div>
      </div>
      <footer className="bg-[#10CC9F] text-white py-4">
        <div className="flex flex-col items-center">
          <p className="font-serif text-xl text-center mb-4">Subscribe to our newsletters and articles</p>
          <div className="flex items-center bg-transparent border-2 rounded-full p-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Input email here"
              className="flex-grow text-black p-2 rounded-l-full border-none focus:outline-none"
            />
            <Link to="/advice" className="text-white bg-[#337eff] py-2 px-6 rounded">
            <Mail className="mr-2" /> <b>Articles/Newsletter</b> 
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
  
  export default LandingPage