const ServicesCard = ({ icon, name, className }) => {
    return (
      <div className={`relative flex items-center border rounded shadow-md h-[150px] w-full p-4 ${className}`}>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white mr-4">
          {icon}
        </div>
        <p className="text-black font-bold text-lg sm:text-2xl">{name}</p>
      </div>
    );
  };
  
  export default ServicesCard;
  