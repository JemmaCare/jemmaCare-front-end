import { Link } from "react-router-dom";
import TherapistsCard from "../components/therapistsCard";
import josh from "../images/josh.jpg";
import jolie from "../images/jolie.png";
import esther from "../images/esther.png"
import ceo from "../images/ceo.jpg"
import gracie from "../images/gracie.jpg"
import reggie from "../images/reggie.jpg"
import owarewaa from "../images/owarewaa.jpg"
import marigold from "../images/marigold.jpg"
import kafui from "../images/kafui.jpg"
import nuna from "../images/nuna.jpg"
import nhyira from "../images/nhyira.webp"
import rich from "../images/rich.jpg"
import user2 from "../images/user2.png"

const Therapist = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-8 bg-gray-100 min-h-screen px-4 sm:px-10 py-10">
        <h3 className="text-3xl font-bold text-center mb-4">
          Meet Our Dedicated Team of Mental Health Therapists
        </h3>
        <p className="text-center max-w-2xl mb-10">
          At JemmaCare, we are proud to present a diverse and dynamic team of mental health professionals, each dedicated to fostering wellness and providing compassionate support.<br /><br /> Our therapists come from varied backgrounds, bringing together a wealth of experience, cultural sensitivity, and specialized expertise in mental health care.
          <br /><br />
          Our team is united by a shared commitment to breaking down the barriers of stigma associated with mental health in Africa. Each therapist is carefully selected not just for their qualifications, but for their passion for making a real difference in the lives of those they serve. <br /><br />Whether you are seeking help for anxiety, depression, or any other mental health concern, our therapists are here to guide you on your journey to wellness.
          <br /><br />
          With a blend of clinical excellence and deep empathy, our therapists offer personalized care that respects your unique experiences and needs. They are skilled in a range of therapeutic approaches, <br /><br />ensuring that you receive the most effective support tailored to your situation.
          <br /><br />
          At JemmaCare, we believe in the power of connection, and our therapists are dedicated to building strong, trusting relationships with their clients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <Link to="/esther">
            <TherapistsCard image={esther} name="Esther Agbozo" text="Medical Doctor" />
          </Link>
          <Link to="/gracie">
            <TherapistsCard image={gracie} name="Gracie Awudi" text="Clinical Psychologist"/>
          </Link>
          <Link to="/josh">
            <TherapistsCard image={josh} name="Josh Manford" text="Psychiatrist" />
          </Link>
          <Link to="/kafui">
            <TherapistsCard image={kafui} name="Kafui Danku" text="Clinical Social Worker" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={marigold} name="Marigold Hanson" text="Psychiatric Nurse"/>
          </Link>
          <Link to="/martin">
            <TherapistsCard image={user2} name="Martin Addo" text="Anxiety Expert"/>
          </Link>
          <Link to="/nhyira">
            <TherapistsCard image={nhyira} name="Nhyira Oduro" text="Depression Expert"/>
          </Link>
          <Link to="/nuna">
            <TherapistsCard image={nuna} name="Nuna Anum" text="Mental Health Avocate"/>
          </Link>
          <Link to="/owarewaa">
            <TherapistsCard image={owarewaa} name="Owarewaa Owusu" text="Peer Counsellor" />
          </Link>
          <Link to="/reggie">
            <TherapistsCard image={reggie} name="Reggie Mauel" text="OCD Expert" />
          </Link>
          <Link to="/rich">
            <TherapistsCard image={rich} name="Rich Richardson" text="Body Therapist"/>
          </Link>

          <Link to="/ruth">
            <TherapistsCard image={ceo} name="Ruth Angelo" text="Mental Health Advocate"/>
          </Link>
         


        </div>
      </div>
    </>
  );
};

export default Therapist;

