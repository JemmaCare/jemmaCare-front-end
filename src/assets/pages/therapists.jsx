import { Link } from "react-router-dom";
import TherapistsCard from "../components/therapistsCard";
import josh from "../images/josh.jpg";
import jolie from "../images/jolie.png";

const Therapist = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-8 bg-gray-100 min-h-screen px-4 sm:px-10 py-10">
        <h3 className="text-3xl font-bold text-center mb-4">
          Meet Our Dedicated Team of Mental Health Therapists
        </h3>
        <p className="text-center max-w-2xl mb-10">
          At JemmaCare, we are proud to present a diverse and dynamic team of mental health professionals, each dedicated to fostering wellness and providing compassionate support. Our therapists come from varied backgrounds, bringing together a wealth of experience, cultural sensitivity, and specialized expertise in mental health care.
          <br /><br />
          Our team is united by a shared commitment to breaking down the barriers of stigma associated with mental health in Africa. Each therapist is carefully selected not just for their qualifications, but for their passion for making a real difference in the lives of those they serve. Whether you are seeking help for anxiety, depression, or any other mental health concern, our therapists are here to guide you on your journey to wellness.
          <br /><br />
          With a blend of clinical excellence and deep empathy, our therapists offer personalized care that respects your unique experiences and needs. They are skilled in a range of therapeutic approaches, ensuring that you receive the most effective support tailored to your situation.
          <br /><br />
          At JemmaCare, we believe in the power of connection, and our therapists are dedicated to building strong, trusting relationships with their clients. They work collaboratively with you, empowering you to overcome challenges and achieve lasting mental well-being.
          <br /><br />
          Join us at JemmaCare and discover the support you deserve with our exceptional team of mental health therapists. Your well-being is our priority, and we are here to help you thrive.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Esther" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Ruth" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Josh" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Gracie" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Reggie" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Owarewaa" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Esther" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Ruth" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Josh" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Gracie" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Reggie" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Owarewaa" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Rich" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Esther" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Ruth" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Josh" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Gracie" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Reggie" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Owarewaa" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Rich" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Esther" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Ruth" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Josh" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Gracie" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Reggie" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Owarewaa" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Rich" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Esther" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Ruth" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Josh" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Gracie" />
          </Link>
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Reggie" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Owarewaa" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Therapist;

 