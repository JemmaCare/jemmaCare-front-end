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
      <div className="flex flex-col items-center mt-8 bg-gray-100 px-4 sm:px-10 py-10">
        <h3 className="text-3xl font-bold text-center mb-4">
          Meet Our Dedicated Team of Therapists
        </h3>
        <p className="text-center max-w-2xl mb-10">
        At JemmaCare, we are proud to have a diverse team of mental health professionals dedicated to breaking the <br /> stigma around mental health in Africa.  Our therapists bring a wealth of experience, <br /> cultural sensitivity, and specialized <br /> expertise to provide compassionate,  personalized care for conditions like anxiety, depression, and more.<br /> With a blend of clinical excellence and deep empathy, our team is committed to fostering wellness <br /> and building strong, trusting relationships with every client, <br /> ensuring that each individual feels supported on their journey to better mental health.
        </p>


      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
        {
          therapists.length == 0 ? <p>loading</p> : therapists.map((therapist) => (<Link to={`/all-therapists/${therapist.id}`}>
            <TherapistsCard image={`https://savefiles.org/${therapist?.profilePicture}?shareable_link=330`} 
            name={`${therapist?.userId.firstName} ${therapist?.userId.lastName}`} 
            text="Medical Doctor" />
          </Link>))
        }

      </div>

    </>
  );
};

export default Therapist;

