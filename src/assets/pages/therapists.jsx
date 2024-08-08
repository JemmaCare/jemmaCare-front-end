import TherapistsCard from "../components/therapistsCard";
import josh from "../images/josh.jpg"
import jolie from "../images/jolie.png"
import { Link } from "react-router-dom";

const Therapists = () => {
  return (
    <>
      <div className="px-4 sm:px-10 py-10">
        <div>
          <h3 className="font-bold text-lg sm:text-2xl"></h3>
        </div>
        <div className="grid grid-rows-2 sm:grid-rows-4 gap-5 pt-5">
          <Link to="/josh">
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
          </Link>
        </div>
      </div>
    </>
  );
}

export default Therapists