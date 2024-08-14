

import K from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";
import PagesLayout from "../layouts/pagesLayouts";

const Therapists = () => {
  
  return (
    <PagesLayout
      headerText="THERAPISTS"
      buttonText="Add new"
      onClick={() => ("/admdashboard/therapists/add")}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {K.THERAPISTS.map(
          (
            { name,overview, profilePicture, institution, experience, expertise, nationality, phone, gender},
            index
          ) => (
            <div
              key={index}
              className="shadow-md rounded-xl p-5 bg-gradient-to-r from-teal-400 to-teal-600 text-white flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{institution}</span>
                <div className="flex gap-2">
                  <button className="bg-[#10CC9F] p-2 rounded-full text-white">
                    <Edit size={16} />
                  </button>
                  <button className="bg-[#10CC9F] p-2 rounded-full text-white">
                    <TrashIcon size={16} />
                  </button>
                </div>
              </div>
              <div className="mt-2">
              <span className="block font-medium">{name}</span>
                <span className="block">{overview}</span>
                <span className="block mt-1">
                  {profilePicture}
                </span>
                <span className="block font-medium">{institution}</span>
                <span className="block">{experience}</span>
                <span className="block mt-1"> {expertise}</span>
                  <span className="block font-medium">{nationality}</span>
                <span className="block">{phone}</span>
                <span className="block mt-1">
                  {gender} 
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </PagesLayout>
  );
};

export default Therapists;
