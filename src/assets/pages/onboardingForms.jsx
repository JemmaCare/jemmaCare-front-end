import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { apiPatientResponses } from "../../services/onboarding";



const OnboardingForms = () => {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors } } = useForm();

    const onSubmit = async (data) => {
      console.log(data);
      setIsSubmitting(true)
      let payload = {
        therapyType: data.therapyTherapy,
        age: data.age,
        nationality:data.nationality,
        phone:data.phone,
        address: data.address,
        gender: data.gender,
        previousTherapy: data.previousTherapy,
        feelings: data.feelings,
        
      };
      
      try {
        const res = await apiPatientResponses(payload);
        console.log(res.data)
        toast.success(res.data.message)
        navigate("/therapist")
        
      } catch (error) {
        console.log(error)
        toast.error("An error occured")
        
      } finally {
        setIsSubmitting(false)
      }
    };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10 bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-xl bg-white shadow-md">
        <div className="flex flex-col justify-center w-full p-6 bg-[#10CC9F] rounded-l-xl">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

            <div className="text-center text-bold text-white mb-6" >
              <h1 className="text-2xl font-bold">Help us Match You to the Right Therapist</h1>
            </div>
            <div>
              <label htmlFor="therapyType" className="block text-white mb-1">
                Therapy Type
              </label>
              <select
                id="therapyType"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
                {
                  ...register("therapyType", { required: "Therapy Type name is not provided" })
                  }
              >
                <option value="" disabled selected>Bipolar</option>
                <option value="cognitive">Depression</option>
                <option value="psychodynamic">Psychosis</option>
                <option value="family">Anxiety</option>
                <option value="group">Personality Disorders</option>
                <option value="cognitive">Schizophrenia</option>
                <option value="psychodynamic">Body Dysmorphic Disorder</option>
                <option value="family">Obssessive Compulsive Disorder</option>
                <option value="group">Postpartum Depression</option>
               
              </select>
              {errors.therapyType && (<p className="text-red-500">{errors.therapyType.message}</p>)}
            </div>
            <div>
              <label htmlFor="age" className="block text-white mb-1">
                Age
              </label>
              <select
                id="age"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
                {
                  ...register("age", { required: "Age is not provided" })
                  }
              >
                <option value="" disabled selected>Select Age Range</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46-60">46-60</option>
                <option value="60+">60+</option>
                
              </select>
              {errors.age && (<p className="text-red-500">{errors.age.message}</p>)}
            </div>

            <div>
              <label htmlFor="nationality" className="block text-white mb-1">
                Nationality
              </label>
              <select
                id="nationality"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
                {
                  ...register("nationality", { required: "not provided," })
                  }
              >
                <option value="" disabled selected>Nationality</option>
                <option value="ghana">Ghana</option>
                <option value="nigeria">Nigeria</option>
                <option value="zimbabwe">Zimbabwe</option>
                <option value="uganda">Uganda</option>
                
              </select>
              {errors.nationality && (<p className="text-red-500">{errors.nationality.message}</p>)}
            </div>
            <div>
              <label htmlFor="phone" className="block text-white mb-1">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                placeholder=""
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
                {
                  ...register("phone", { required: "Contact is not provided" })
                  }
              />
              {errors.phone && (<p className="text-red-500">{errors.phone.message}</p>)}
            </div>
            <div>
              <label htmlFor="address" className="block text-white mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder=""
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
                {
                  ...register("address", { required: "address is not provided" })
                  }
              />
              {errors.address && (<p className="text-red-500">{errors.address.message}</p>)}
            </div>
            <div>
              <label htmlFor="gender" className="block text-white mb-1">
                Gender
              </label>
              <select
                id="gender"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
                {
                  ...register("gender", { required: "gender is not provided," })
                  }
              >
                <option value="" disabled selected>Gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
                
              </select>
              {errors.gender && (<p className="text-red-500">{errors.gender.message}</p>)}
            </div>
            <div>
              <label htmlFor="previousTherapy" className="block text-white mb-1">
               Previous Therapy
              </label>
              <select
                id="previousTherapy"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
                {
                  ...register("previousTherapy", { required: "No option selected" })
                  }
              >
                <option value="" disabled selected>Previous Therapy</option>
                <option value="yes">yes</option>
                <option value="no">no</option>
                
              </select>
              {errors.previousTherapy && (<p className="text-red-500">{errors.previousTherapy.message}</p>)}
            </div>
            <div>
              <label htmlFor="feelings" className="block text-white mb-1">
                How do you feel today?
              </label>
              <input
                type="text"
                id="feelings"
                placeholder=""
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
                {
                  ...register("feelings", { required: "Please let us know you better" })
                  }
              />
              {errors.feelings && (<p className="text-red-500">{errors.feelings.message}</p>)}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-[#10CC9F] text-lg font-bold m-4 h-12 w-48 px-3 py-2 bg-white border-2 rounded-3xl hover:bg-teal-100 hover:text-black"
              >
                Find Therapist
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForms;
