
const TherapistsCard = ({ image, name, text }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full object-cover"
      />
      <h4 className="mt-4 text-center text-lg font-semibold">{name}</h4>
      <p></p>
    </div>
  );
};
export default TherapistsCard;