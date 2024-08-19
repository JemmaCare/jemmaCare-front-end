import { Link } from "react-router-dom";
import TherapistsCard from "../components/therapistsCard";
import { apiGetTherapists } from "../services/therapist";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Therapist = () => {
  const [therapists, setTherapists] = useState([])

  const fetchTherapists = async () => {


    try {
      const res = await apiGetTherapists();
      console.log(res.data);
      setTherapists(res.data)

    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  };

  useEffect(() => {

    fetchTherapists()
  }, [])

  return (
    <>
      <div className="flex flex-col items-center mt-8 bg-gray-100 min-h-screen px-4 sm:px-10 py-10">
        <h3 className="text-3xl font-bold text-center mb-4">
          Meet Our Dedicated Team of Mental Health Therapists
        </h3>
        <p className="text-center max-w-2xl mb-10">
          At JemmaCare, we are proud to present a diverse and dynamic team of mental health professionals, each dedicated to fostering wellness and providing compassionate support.<br /><br /> Our therapists come from varied backgrounds, bringing together a wealth of experience, cultural sensitivity, and specialized expertise in mental health care.
          <br /><br />
          Our team is united by a shared commitment to breaking down the barriers of stigma associated with mental health in Africa. <br /><br />Whether you are seeking help for anxiety, depression, or any other mental health concern, our therapists are here to guide you on your journey to wellness.
          <br /><br />
          With a blend of clinical excellence and deep empathy, our therapists offer personalized care that respects your unique experiences and needs.
          <br /><br />
          At JemmaCare, we believe in the power of connection, and our therapists are dedicated to building strong, trusting relationships with their clients.
        </p>


      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {
          therapists.length == 0 ? <p>loading</p> : therapists.map((therapist) => (<Link to={`/all-therapists/${therapist.id}`}>
            <TherapistsCard image={`https://savefiles.org/${therapist?.profilePicture}?shareable_link=330`} name={`${therapist?.userId.firstName} ${therapist?.userId.lastName}`} text="Medical Doctor" />
          </Link>))
        }

      </div>

    </>
  );
};

export default Therapist;

