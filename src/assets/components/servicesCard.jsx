const ServicesCard = ({ icon, title, description, subtitle, className }) => {
  return (
    <div className={`relative flex flex-col items-start border rounded shadow-md h-auto w-full p-6 ${className}`}>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4">
        {icon}
      </div>
      <h1 className="text-black font-bold text-xl sm:text-3xl mb-2">{title}</h1>
      <p className="text-white text-base sm:text-lg mb-4">{description}</p>
      <h3 className="text-white font-medium text-lg sm:text-2xl">{subtitle}</h3>
    </div>
  );
};

export default ServicesCard;
