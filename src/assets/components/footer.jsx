import { ArrowBigUp, Facebook, Instagram, MailIcon, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import jemmaLogo from "../images/jemmaLogo.png";

const Footer = () => {
  return (
    <div className="bg-[#10CC9F] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Newsletter Section */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <p className="font-serif text-lg md:text-xl mb-2">Subscribe to our newsletters and articles</p>
            <div className="flex items-center bg-white border-2 rounded-full p-1 w-full max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Input email here"
                className="flex-grow text-black px-3 py-2 rounded-l-full border-none focus:outline-none text-base md:text-lg"
              />
              <Link to="/articles" className="flex items-center bg-teal-500 text-white py-1 px-4 rounded-full">
                <MailIcon className="mr-2 h-6 w-6" /> <b className="text-base md:text-lg">Articles</b>
              </Link>
            </div>
          </div>

          
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <img src={jemmaLogo} alt="logo" className="h-12 w-auto mx-auto mb-2" />
            <p className="text-sm md:text-base font-semibold">© 2024 JemmaCare, Inc.</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link to="/facebook" className="hover:text-teal-200">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link to="/instagram" className="hover:text-teal-200">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link to="/twitter" className="hover:text-teal-200">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h2 className="font-bold mb-2 text-sm md:text-base">Contact Us</h2>
            <p className="text-sm md:text-base">Advice and support: <b className="font-bold">0544041653</b></p>
            <p className="text-sm md:text-base">
              No.33 Aluguntugui St.<br />
              Great Michael House<br />
              Jemma's Place<br />
              Accra
            </p>
            <Link to="mailto:advice@jemmacare.org" className="hover:underline text-sm md:text-base">
              advice@jemmacare.org
            </Link>
          </div>
        </div>

       
        <div className="border-t border-teal-500 mt-4 pt-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="font-bold text-sm md:text-base">Our Services</h2>
              <div className="flex flex-col md:flex-row gap-2">
                <Link to="/services" className="hover:underline text-sm md:text-base">Services</Link>
                <Link to="/testimonials" className="hover:underline text-sm md:text-base">Testimonials</Link>
              </div>
            </div>
            <Link to="/supportform" className="font-bold text-lg text-teal-200 hover:underline">
              Need Support?
            </Link>
          </div>

      
          <div className="mt-4">
            <Link to="/" className="flex flex-col items-center justify-center text-black p-2 hover:text-teal-200">
              <div className="bg-teal-100 p-1 rounded-full hover:bg-teal-200">
                <ArrowBigUp className="h-6 w-6" />
              </div>
              <span className="mt-1 text-sm md:text-base">Back to top</span>
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-sm md:text-base">Jemma Care is a mental health support platform based in Accra, Ghana.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
