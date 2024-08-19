import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { apiPatientResponses } from "../services/onboarding";
import onboarding from "../assets/images/onboarding.png";

const OnboardingForms = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);

    let payload = {
      therapyType: data.therapyType,
      age: data.age,
      nationality: data.nationality,
      phone: data.phone,
      address: data.address,
      gender: data.gender,
      previousTherapy: data.previousTherapy,
      feelings: data.feelings,
    };

    try {
      const res = await apiPatientResponses(payload);
      console.log(res.data);

      

      toast.success(res.data.message);
      navigate("/all-therapists");
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${onboarding})` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-teal-600">Help us Match You to the Right Therapist</h1>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="therapyType" className="block text-teal-600 mb-1">
              Therapy Type
            </label>
            <select
              id="therapyType"
              className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              {...register("therapyType", { required: "Therapy Type name is not provided" })}
            >
              <option disabled selected>
                Services
              </option>
              <option>Bipolar</option>
              <option>Depression</option>
              <option>Psychosis</option>
              <option>Anxiety</option>
              <option>Personality Disorders</option>
              <option>Schizophrenia</option>
              <option>Body Dysmorphic Disorder</option>
              <option>Obsessive Compulsive Disorder</option>
              <option>Postpartum Depression</option>
            </select>
            {errors.therapyType && <p className="text-red-500">{errors.therapyType.message}</p>}
          </div>
          <div>
            <label htmlFor="age" className="block text-teal-600 mb-1">
              Age
            </label>
            <input
              type="number"
              id="age"
              placeholder=""
              className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              {...register("age", { required: "Contact is not provided" })}
            />
            {errors.age && <p className="text-red-500">{errors.age.message}</p>}
          </div>
          <div>
            <label htmlFor="nationality" className="block text-teal-600 mb-1">
              Nationality
            </label>
            <select
              id="nationality"
              className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              {...register("nationality", { required: "Nationality is not provided" })}
            >
              <option value=""disabled selected>
                Nationality
              </option>
              <option>Ghana</option>
              <option>Nigeria</option>
              <option>Zimbabwe</option>
              <option>Uganda</option>
            </select>
            {errors.nationality && <p className="text-red-500">{errors.nationality.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-teal-600 mb-1">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              placeholder=""
              className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              {...register("phone", { required: "Contact is not provided" })}
            />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
          </div>
          <div>
            <label htmlFor="address" className="block text-teal-600 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder=""
              className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              {...register("address", { required: "Address is not provided" })}
            />
            {errors.address && <p className="text-red-500">{errors.address.message}</p>}
          </div>
          <div>
            <label htmlFor="gender" className="block text-teal-600 mb-1">
              Gender
            </label>
            <select
              id="gender"
              className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              {...register("gender", { required: "Gender is not provided" })}
            >
              <option value="" disabled selected>
               gender
              </option>
              <option>male</option>
              <option>female</option>
            </select>
            {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
          </div>
          <div>
            <label htmlFor="previousTherapy" className="block text-teal-600 mb-1">
              Previous Therapy
            </label>
            <select
              id="previousTherapy"
              className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              {...register("previousTherapy", { required: "No option selected" })}
            >
              <option value="" disabled selected>
              previousTherapy
              </option>
              <option>true</option>
              <option>false</option>
            </select>
            {errors.previousTherapy && <p className="text-red-500">{errors.previousTherapy.message}</p>}
          </div>
          <div>
            <label htmlFor="feelings" className="block text-teal-600 mb-1">
              How do you feel today?
            </label>
            <input
              type="text"
              id="feelings"
              placeholder=""
              className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              {...register("feelings", { required: "Please let us know how you feel" })}
            />
            {errors.feelings && <p className="text-red-500">{errors.feelings.message}</p>}
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
  );
};

export default OnboardingForms;
