

const TherapistsCard = ({ name, image }) => {
  return (
    <div className="relative h-[100px] w-full sm:w-[200px] p-4">
      <div className="flex justify-center items-center h-full">
        <img className="h-auto max-h-full w-auto max-w-full rounded-full" src={image} alt={name} />
        <p className="absolute bottom-4 text-black font-bold text-lg sm:text-2xl">{name}</p>
      </div>
    </div>
  );
};

export default TherapistsCard;