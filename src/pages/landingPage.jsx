import jemma from "../assets/images/jemma.mp4";
import { Link } from "react-router-dom";
import About from "./about";
import Services from "./services";
import Users from "./users";
import Testimonials from "./testimonials";

const LandingPage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden min-h-screen">
      <div className="w-screen relative flex-grow">
        <video 
          src={jemma} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
          <h1 className="text-4xl font-bold mb-4">We're Here Together</h1>
          <p className="text-lg mb-6">Supporting each other through the journey</p>
          <div className="flex gap-5">
            <Link to="/signup" className="flex items-center text-white bg-[#10CC9F] py-2 px-4 rounded">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Testimonials />
      <Users />
    </div>
  );
};

export default LandingPage;
