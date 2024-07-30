import Button from "../components/button"
import OurServices from "./ourServices"


const LandingPage = () => {
    return (
      <div className="flex flex-col w-auto h-screen">
      <div className=" bg-blue-400 w-auto h-screen">
          <h1>We are a totality of our thoughts</h1>
          <p>Don't underestimate your thoughts</p>
      </div>
      <div className="bg-blue-200">
          <OurServices/>
          <Button/>
      </div>
  </div>
  
    )
  }
  
  export default LandingPage