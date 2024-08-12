import { Link } from "react-router-dom";
import ServicesCard from "../components/servicesCard";
import { HandshakeIcon, HeartIcon } from "lucide-react";

const Services = () => {
  return (
    <>
      <div className="px-4 sm:px-10 py-10">
        <div>
          <h3 className="font-bold text-white text-lg sm:text-2xl">Our Services</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
          <Link to="/bipolar" className="block">
            <ServicesCard icon={<HeartIcon />} name="Bipolar" className="bg-[#10CC9F]" />
            <p className="text-white mt-2">Depression is a type of mental health problem that causes people to experience extreme mood swings.</p>
          </Link>
          <Link to="/depression" className="block">
            <ServicesCard icon={<HandshakeIcon />} name="Depression" className="bg-[#E1151E]" />
            <p className="text-white mt-2">A mental health condition characterised by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities.</p>
          </Link>
          <Link to="/psychosis" className="block">
            <ServicesCard icon={<HandshakeIcon />} name="Psychosis" className="bg-[#FDCD15]" />
            <p className="text-white mt-2">Psychosis is experienced differently by each person. It refers to a loss of contact with reality, such as seeing or believing things that aren't real.</p>
          </Link>
          <Link to="/pds" className="block">
            <ServicesCard icon={<HandshakeIcon />} name="Personality Disorders" className="bg-[#10CC9F]" />
            <p className="text-white mt-2">Mental health conditions characterised by a lifelong pattern of harmful self-perceptions and problematic responses to others.</p>
          </Link>
          <Link to="/schizo" className="block">
            <ServicesCard icon={<HandshakeIcon />} name="Schizophrenia" className="bg-[#E8238D]" />
            <p className="text-white mt-2">A condition characterised by hallucinations, delusions, and disorganised thinking.</p>
          </Link>
          <Link to="/bdd" className="block">
            <ServicesCard icon={<HandshakeIcon />} name="Body Dysmorphic Disorder" className="bg-[#AACB47]" />
            <p className="text-white mt-2">A mental health condition where a person spends a lot of their time worrying about flaws in their appearance.</p>
          </Link>
          <Link to="/ocd" className="block">
            <ServicesCard icon={<HandshakeIcon />} name="Obsessive Compulsive Disorder" className="bg-[#2D427B]" />
            <p className="text-white mt-2">A mental health condition characterised by unwanted thoughts causing anxiety, leading to repetitive actions or behaviours.</p>
          </Link>
          <Link to="/pdd" className="block">
            <ServicesCard icon={<HandshakeIcon />} name="Post Partum Depression" className="bg-[#63C5D1]" />
            <p className="text-white mt-2">A type of depression that affects some women after giving birth, causing feelings of extreme sadness, anxiety, and exhaustion.</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
