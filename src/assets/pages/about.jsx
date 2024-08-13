import user2 from "../images/user2.png";
import jolie from "../images/jolie.png";

const About = () => {
  return (
    <div className="p-4 sm:p-10 bg-gray-100">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-10">
        <div className="w-full sm:w-1/3 flex justify-center">
          <img
            src={jolie}
            alt="About Us"
            className="rounded-full w-48 h-48 sm:w-60 sm:h-60 object-cover"
          />
        </div>
        <div className="w-full sm:w-2/3">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 leading-relaxed">
            JemmaCare offers Africans a seamless platform to connect with qualified therapists, inspired by my personal journey through postpartum depression and the invaluable support from my sister, a medical doctor and a dedicated mental health advocate. Our mission is to provide accessible, culturally sensitive mental health resources, and professional guidance, ensuring no one has to navigate their mental health challenges alone. We strive to break the stigma surrounding mental health in Africa, fostering a supportive community that empowers individuals to seek help and thrive. Join us in transforming mental health care, one connection at a time.
          </p>
        </div>
      </div>


      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
        
        <div className="w-full sm:w-2/3">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Careers</h1>
          <p className="text-gray-700 leading-relaxed">
            Join the team that’s changing lives. We are passionate and compassionate professionals, driven by the mission of helping more people live a better and happier life every day. We are growing fast and always looking for new talent! Reach out to us today and become part of a community that is changing lives, one life at a time.
          </p>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center">
          <img
            src={user2}
            alt="Careers"
            className="rounded-full w-48 h-48 sm:w-60 sm:h-60 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
