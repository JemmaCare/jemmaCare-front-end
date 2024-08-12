import TherapistsCard from "../components/therapistsCard";
import josh from "../images/josh.jpg"
import jolie from "../images/jolie.png"
import { Link } from "react-router-dom";

const Therapist = () => {
  return (
    <>
     
        <div className="flex justify-center">
          <h3>Meet Our Therapists</h3>
        </div>
        <div className="flex justify-center items-center px-4 sm:px-10 py-10 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-12 grid-row-3 gap-5">
          <Link to="/josh">
            <TherapistsCard image={jolie} name="Esther" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Ruth" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="Josh" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Gracie" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="Reggie" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Owarewaa" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="Rich" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Therapist" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="User" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Melly" />
          </Link> <Link to="/josh">
            <TherapistsCard image={jolie} name="Harry" />
          </Link>
          <Link to="/marigold">
            <TherapistsCard image={josh} name="Marigold" />
          </Link>
          

        </div>
        </div>
    </>
  );
}

export default Therapist