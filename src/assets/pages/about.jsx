import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
       < div>
        <h1>About Us</h1>
        {/* <h2>The value proposition for JemmaCare</h2> */}
       

          <p>Find yourself in therapy
          BetterHelp was founded in 2013 to remove the traditional barriers to therapy and make mental health care more accessible to everyone. Today, it is the world’s largest therapy service — providing professional, affordable, and personalized therapy in a convenient online format. BetterHelp’s network of over 30,000 licensed therapists has helped millions of people take ownership of their mental health and work towards their personal goals. As the unmet need for mental health services continues to grow, BetterHelp is committed to expanding access to therapy globally.</p>  
          </div>
          <div>
            <h1>Careers</h1>
            <p>Join the team that’s changing lives
            We are passionate and compassionate professionals, driven by the mission of helping more people live a better and happier life every day. We are growing fast and always looking for new talent!</p>
            <Link to="/therapists" classname="flex items-center border-2 bg-[#337eff] py-2 px-4 rounded">View jobs here</Link>
          </div>
          <div>
            <h1>Reviews</h1>
            <p>Here are our top </p>
          </div>
        </div>
       
  )
}

export default About