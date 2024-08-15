const Appointment = ({ selectedDate, selectedMethod, therapistName }) => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-teal-400 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h3 className="text-2xl font-bold mb-4 text-center">Appointment Summary</h3>
          <p className="mb-2"><strong>Date and Time:</strong> {selectedDate ? selectedDate.toString() : "Not selected"}</p>
          <p className="mb-2"><strong>Communication Method:</strong> {selectedMethod ? selectedMethod : "Not selected"}</p>
          <p className="mb-2"><strong>Therapist:</strong> {therapistName ? therapistName : "Not selected"}</p>
        </div>
      </div>
    );
  };
  
  export default Appointment;
  