
import bgImageTwo from "../images/bgImageTwo.png"
const SupportForm = () => {
  return (
    <div>
      <div  className="w-screen relative flex-grow">
        <img src={bgImageTwo} alt="background image" className="w-full h-auto"/>
        <div/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-75 p-4">
        <h1 className="text-6xl font-bold mb-4">need support?</h1>
        <p className="text-lg mb-6">
We place people at the heart of what we do and <br />
build the support they need to move forward with their lives</p>
      </div>
      </div>
        <h1>use the need support form from change </h1>
        
    </div>
  )
}

export default SupportForm