const TherapistsCard = ({ image, name, text, buttonLabel, onButtonClick }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full object-cover"
      />
      <h4 className="mt-4 text-center text-lg font-semibold text-teal-600">
        {name}
      </h4>
      <p className="mt-2 text-center text-gray-600">
        {text}
      </p>
      <button
        onClick={onButtonClick}
        className="mt-4 px-4 py-2 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition duration-300"
      > Book Appointment
        {buttonLabel}
      </button>
    </div>
  );
};

export default TherapistsCard;
