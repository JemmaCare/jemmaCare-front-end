import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import onboarding from "../images/onboarding.png";

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-teal-300 p-6">
      <img
        src={onboarding}
        alt="background image"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-teal-600 font-bold text-2xl text-center mb-4">
          Book Your Appointment
        </h2>
        <label
          htmlFor="appointmentDateTime"
          className="text-teal-600 font-semibold mb-2 block text-center"
        >
          Select Date and Time
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            console.log(date);
            setSelectedDate(date);
          }}
          showTimeSelect
          timeCaption="Time"
          dateFormat="Pp"
          placeholderText="Click to select a date"
          className="w-full p-3 border-2 border-teal-500 rounded-lg text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="text-white text-lg font-bold h-12 w-full max-w-xs px-6 py-2 bg-teal-600 border-2 border-teal-600 rounded-3xl hover:bg-teal-500 hover:text-black transition duration-300 ease-in-out"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;
