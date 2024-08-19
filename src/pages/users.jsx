import { Link } from "react-router-dom";
import UsersCard from "../components/usersCard";
import user1 from "../assets/images/user1.png";
import tpImage from "../assets/images/tpImage.png";

const Users = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="font-bold text-lg sm:text-2xl text-center mb-8">Start Out Here</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <Link to="/signup">
              <UsersCard image={user1} name="Patient" />
            </Link>
            <Link to="/therapistlogin">
              <UsersCard image={tpImage} name="Therapist" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
