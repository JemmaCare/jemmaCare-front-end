import jemma from "../images/jemmaLogo.png";
import { Link } from "react-router-dom";
import K1 from "../constants";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-2 py-2 m-2">
        <span className="w-10 h-10">
          <img src={jemma} alt="logo" />
        </span>
        <div className="flex gap-x-5">
          {K1.NAVLINKS.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.path}
                className="border border-[#10CC9F] px-3 py-2 rounded hover:bg-[#10CC9F]"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
