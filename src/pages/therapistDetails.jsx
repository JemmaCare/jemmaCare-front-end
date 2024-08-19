import { Calendar } from "lucide-react";
import { Link,useParams } from "react-router-dom";
import { apiGetTherapistById } from "../services/therapist";
import { useState,useEffect } from "react";


const TherapistDetails = () => {
const params = useParams()
  console.log(params)

  const [therapist, setTherapist] = useState({})

  const fetchTherapist = async () => {


    try {
      const res = await apiGetTherapistById(params.id);
      console.log(res.data);
      setTherapist(res.data)

    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  };

  useEffect(() => {

    fetchTherapist()
  }, [])

  return (
    <div className="flex flex-col items-start justify-center min-h-screen px-4 md:px-16 lg:px-24 w-full md:w-4/5 lg:w-3/5 mt-2">
      <div className="flex items-start space-x-6 mb-8">
        <img
          src={`https://savefiles.org/${therapist?.profilePicture}?shareable_link=330`} name={`${therapist?.userId.firstName} ${therapist?.userId.lastName}`}
          alt="Esther"
          className="rounded-full w-44 h-44 object-cover"
        />
       
      </div>
      <div className="flex flex-col space-y-4">
      
          <Link 
            to={`/all-therapists/${therapist.id}`}
            aria-label="Book Appointment with Esther" 
            className="bg-teal-200 text-teal-700 font-semibold p-4 rounded-lg shadow-sm flex items-center space-x-2 hover:bg-teal-300 transition duration-300"
          >
            <Calendar className="w-6 h-6 text-teal-600" />
            <span>Book Appointment</span>
          </Link>
        </div>

      <div className="text-left w-full">
        <h1 className="text-2xl font-bold mb-4">Medical Doctor</h1>
        <p className="text-lg leading-relaxed mb-4">
          Esther, a dedicated medical officer, has spent the last five years
          immersed in the field of mental health.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Her commitment to mental health advocacy is evident in the numerous
          debates and discussions she has led on the subject.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Over the years, Esther has also been involved in several fellowships
          focused on mental health. These programs have allowed her to
          collaborate with experts from around the world, expanding her
          knowledge and refining her approach to mental health care.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Esther’s dedication extends beyond her professional life. She is
          actively involved in community outreach programs, where she educates
          people about mental health and provides support to those in need.
        </p>
      </div>
    </div>
  );
};

export default TherapistDetails;
