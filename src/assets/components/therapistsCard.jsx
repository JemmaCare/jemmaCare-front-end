import { CalendarCheckIcon, MailIcon, PhoneCallIcon } from "lucide-react";

const TherapistsCard = ({ name, image }) => {
  return (
    <div className="relative border rounded-full shadow-md h-[80px] w-full sm:w-[400px] bg-[#10CC9F] p-4">
      <div className="absolute top-4 left-4">
        <p className="text-black font-bold text-lg sm:text-2xl">{name}</p>
        <PhoneCallIcon/> <MailIcon/> <CalendarCheckIcon/>
      </div>
      <div className="flex justify-center items-center h-full">
        <img className="h-auto max-h-full w-auto max-w-full" src={image} alt={name} />
      </div>
    </div>
  );
};

export default TherapistsCard;