import { Phone, Video } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const CommunicationMethod = ({ selectedMethod, setSelectedMethod }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (method) => {
    setSelectedMethod(method);
    setIsOpen(false);
  };
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
        date: data.date,
        
      };
      
      try {
        const res = await apiAppointmentDateTime(payload);
        console.log(res.data)

        toast.success(res.data.message)
        navigate("/appointment")
        
      } catch (error) {
        console.log(error)
        toast.error("An error occured")
        
      } finally {
        setIsSubmitting(false)
      }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-teal-600">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        <label
          htmlFor="communicationMethod"
          className="block text-teal-600 font-semibold mb-4 text-center"
        >
          Select Communication Method
        </label>
        <div
          className="bg-teal-500 text-white rounded-lg p-3 cursor-pointer flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedMethod || "Select Method"}
          <svg
            className={`w-5 h-5 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {isOpen && (
          <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg z-10">
            <div
              onClick={() => handleSelect("Video Call")}
              className="flex items-center p-2 hover:bg-teal-100 cursor-pointer"
            >
              <Video className="mr-2 text-teal-600" />
              <span className="text-teal-600">Video Call</span>
            </div>
            <div
              onClick={() => handleSelect("Phone Call")}
              className="flex items-center p-2 hover:bg-teal-100 cursor-pointer"
            >
              <Phone className="mr-2 text-teal-600" />
              <span className="text-teal-600">Phone Call</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunicationMethod;
