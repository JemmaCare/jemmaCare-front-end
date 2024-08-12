import { Link } from "react-router-dom";
import UsersCard from "../components/usersCard";
import user1 from "../images/user1.png";
import tpImage from "../images/tpImage.png";

const Users = () => {
  return (
    <>
      <div className="px-4 sm:px-10 py-10">
        <div>
          <h3 className="font-bold text-lg sm:text-2xl"></h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5">
          <Link to="/support">
            <UsersCard image={user1} name="User" />
          </Link>
          <Link to="/therapists">
            <UsersCard image={tpImage} name="Therapist" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Users;
