import React from "react";
import Slider from "react-slick";
import TestimonialsCard from "../components/testimonialsCard";
import afrosmile from "../assets/images/afrosmile.jpeg";
import nhyira from "../assets/images/nhyira.webp";
import rutela2 from "../assets/images/rutela2.png";
import edem from "../assets/images/edem.jpeg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="p-4 sm:p-10 bg-gray-100 ">
      <Slider {...settings}>
        <div className="text-center">
          <TestimonialsCard image={afrosmile} name="Melinda Brobbey" />
          <p>
            "JemmaCare has been a lifeline for me. The ease of connecting with a
            therapist who truly understands my cultural background has made all
            the difference. I feel heard and supported in a way I never thought
            possible."
          </p>
        </div>
        <div className="text-center">
          <TestimonialsCard image={nhyira} name="Nhyiraba Oduro" />
          <p>
            "Using JemmaCare has transformed my mental health journey. The app's
            seamless interface and compassionate therapists have given me the
            confidence to seek help. I’m now thriving, thanks to the personalized
            care I receive."
          </p>
        </div>
        <div className="text-center">
          <TestimonialsCard image={rutela2} name="Mawuko Amenu" />
          <p>
            "JemmaCare’s platform made finding the right therapist simple and
            stress-free. The support I’ve received has been invaluable, helping me
            navigate challenging times with newfound strength and resilience."
          </p>
        </div>
        <div className="text-center">
          <TestimonialsCard image={edem} name="Edem Mensah" />
          <p>
            "JemmaCare has been a game-changer for me. The access to skilled
            therapists who genuinely care has helped me overcome my anxiety. I’m
            grateful for the guidance and the sense of community I’ve found through
            this app."
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
