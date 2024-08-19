import { Link } from "react-router-dom";
import ServicesCard from "../components/servicesCard";
import { HandshakeIcon, HeartIcon } from "lucide-react";

const Services = () => {
  return (
    <div className="px-4 sm:px-10 py-10">
      <div className="flex justify-center">
        <h3 className="font-bold text-black text-lg sm:text-2xl">Our Services</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
        <Link to="/bipolar" className="block">
          <ServicesCard 
            icon={<HeartIcon />} 
            title="Bipolar" 
            description="Depression is a type of mental health problem that causes people to experience extreme mood swings."
            subtitle="More" 
            className="bg-[#10CC9F] "
          />
        </Link>
        
        <Link to="/depression" className="block">
          <ServicesCard 
            icon={<HandshakeIcon />} 
            title="Depression" 
            description="A mental health condition characterised by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities."
            subtitle="More" 
            className="bg-[#E1151E] "
          />
        </Link>

        <Link to="/psychosis" className="block">
          <ServicesCard 
            icon={<HandshakeIcon />} 
            title="Psychosis" 
            description="Psychosis is different for each person. Refers to a loss of contact with reality, such as seeing or believing unreal things."
            subtitle="More" 
            className="bg-[#FDCD15] "
          />
        </Link>

        <Link to="/anxiety" className="block">
          <ServicesCard 
            icon={<HandshakeIcon />} 
            title="Anxiety" 
            description="A mental health condition characterised by persistent and excessive worry, fear, or nervousness about everyday situations."
            subtitle="Learn More" 
            className="bg-[#2D427B] "
          />
        </Link>

        <Link to="/pds" className="block">
          <ServicesCard 
            icon={<HandshakeIcon />} 
            title="Personality Disorders" 
            description="Mental health conditions characterised by a lifelong pattern of harmful self-perceptions and problematic responses to others."
            subtitle="Learn More" 
            className="bg-[#10CC9F] "
          />
        </Link>

        <Link to="/schizo" className="block">
          <ServicesCard 
            icon={<HandshakeIcon />} 
            title="Schizophrenia" 
            description="A condition characterised by hallucinations,  delusions, and disorganised thinking. It could happen to anyone."
            subtitle="Learn More" 
            className="bg-[#E8238D] "
          />
        </Link>

        <Link to="/bdd" className="block">
          <ServicesCard 
            icon={<HandshakeIcon />} 
            title="Body Dysmorphic Disorder" 
            description="A mental health condition where a person spends a lot of their time worrying about flaws in their appearance."
            subtitle="Learn More" 
            className="bg-[#AACB47]"
          />
        </Link>

        <Link to="/ocd" className="block">
          <ServicesCard 
            icon={<HandshakeIcon />} 
            title="Obsessive Compulsive Disorder" 
            description="A mental health condition characterised by unwanted thoughts causing anxiety, leading to repetitive actions or behaviours."
            subtitle="Learn More" 
            className="bg-[#2D427B] "
          />
        </Link>

        <Link to="/pdd" className="block">
          <ServicesCard 
            icon={<HandshakeIcon />} 
            title="Post Partum Depression Disorder" 
            description="A type of depression that affects some women after giving birth, causing feelings of extreme sadness, anxiety, and exhaustion."
            subtitle="Learn More" 
            className="bg-[#63C5D1] "
          />
        </Link>
      </div>
    </div>
  );
};

export default Services;
