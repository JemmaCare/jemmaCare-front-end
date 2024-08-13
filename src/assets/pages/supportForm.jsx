import { Link } from "react-router-dom";
import bgImageThree from "../images/bgImageThree.png";
import ceo from "../images/ceo.jpg";

const SupportForm = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden items-center">
      {/* Hero Section */}
      <div className="w-full relative">
        <img src={bgImageThree} alt="background" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Need Support?</h1>
          <p className="text-base sm:text-lg mb-6">
            We place people at the heart of what we do and<br />
            build the support they need to move forward with their lives.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center text-center w-11/12 sm:w-3/4 my-8">
        <h2 className="text-lg sm:text-xl mb-4">
          At JemmaCare, we ensure that everyone has the mental health support<br />
          they need, when they need it and in a way which works best for them.
        </h2>
        <h3 className="text-base sm:text-lg mb-6">
          Our <b className="text-[#10CC9F]">Advice and Support Service</b> is open Monday to Friday, 10am to 4pm,<br />
          where advisers can signpost you to local support that most fits your needs,<br />
          including our own <b className="text-[#10CC9F]">JemmaCare services.</b><br />
          We offer initial advice on money worries and help to deal with emergencies.
        </h3>

        
        <div className="relative w-full sm:w-3/4 mb-8">
          <img src={ceo} alt="CEO" className="w-full h-80 object-cover rounded-md" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
            <h4 className="text-white text-lg sm:text-xl font-bold p-4 rounded-md">
              Contact Our Advice and Support
            </h4>
          </div>
        </div>

        {/* Support Form */}
        <form className="w-full sm:w-3/4 bg-white p-6 shadow-lg rounded-md">
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-black mb-1">First Name (Required)</label>
              <input type="text" id="firstName" className="w-full h-10 px-2 py-1 border-2 border-black rounded-sm" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-black mb-1">Last Name</label>
              <input type="text" id="lastName" className="w-full h-10 px-2 py-1 border-2 border-black rounded-sm" />
            </div>
            <div>
              <label htmlFor="location" className="block text-black mb-1">Location</label>
              <input type="text" id="location" className="w-full h-10 px-2 py-1 border-2 border-black rounded-sm" />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-black mb-1">Phone Number (Required)</label>
              <input type="text" id="phoneNumber" className="w-full h-10 px-2 py-1 border-2 border-black rounded-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-black mb-1">Email Address</label>
              <input type="text" id="email" className="w-full h-10 px-2 py-1 border-2 border-black rounded-sm" />
            </div>
            <div>
              <label htmlFor="dob" className="block text-black mb-1">Date of Birth</label>
              <input type="text" id="dob" className="w-full h-10 px-2 py-1 border-2 border-black rounded-sm" />
            </div>
            <div>
              <label htmlFor="about" className="block text-black mb-1">Please tell us how we can help you (Required)</label>
              <input type="text" id="about" className="w-full h-10 px-2 py-1 border-2 border-black rounded-sm" />
            </div>
            <div className="flex items-center space-x-2">
              <input id="terms" type="checkbox" className="w-4 h-4 border" />
              <label htmlFor="terms" className="text-black">
                I accept the <Link to="#" className="text-[#10CC9F] underline">Terms and Conditions</Link>
              </label>
            </div>
            <div className="flex justify-center mt-4">
              <button type="submit" className="bg-[#10CC9F] text-white px-4 py-2 rounded-sm hover:bg-gray-400">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportForm;
