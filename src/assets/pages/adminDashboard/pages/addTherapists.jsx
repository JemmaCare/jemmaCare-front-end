

const AddTherapists = () => {
  return (
    <div className="h-screen">
      <h1 className="flex justify-center font-bold text-3xl mb-8 mt-10">Add Therapist</h1>
     <div className="flex justify-center shadow-xl mt-5 w-[600px] m-64">
     <form className="place-content-center m-8" >
        <div className="">
          
          <label
            htmlFor="institutionName"
            className="block mb-1 ml-4 "
          >
            Name 
          </label>
          <input
            type="text"
            id="therapistName"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="overview"
            className="block   mb-1 ml-4"
          >
            Overview
          </label>
          <input
            type="text"
            id="overview"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg"
          />
          <label
            htmlFor="profilePicture"
            className="block   mb-1 ml-4"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="institution"
            className="block   mb-1 ml-4"
          >

            Institution
          </label>
          <input
            type="text"
            id="institution"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="startDate"
            className="block   mb-1 ml-4"
          >
           Expertise
          </label>
          <input
            type="text"
            id="expertise"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg"
          />
          <label
            htmlFor="experience"
            className="block   mb-1 ml-4"
          >
           Experience
          </label>
          <input
            type="text"
            id="experience"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="nationality"
            className="block   mb-1 ml-4"
          >
           Nationality
          </label>
          <input
            type="text"
            id="nationality"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="phone"
            className="block   mb-1 ml-4"
          >
           Phone
          </label>
          <input
            type="number"
            id="phone"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
        </div>
        <label
            htmlFor="gender"
            className="block   mb-1 ml-4"
          >
           Gender
          </label>
          <input
            type="text"
            id="gender"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
        <div className="flex justify-center items-center mt-5">
          <button 
          type="submit" className=" mt-5 h-10 w-40 px-3 py-2 bg-teal-400 border-2 rounded-3xl hover:bg-[#e7d7e9] font-bold"
          >Submit</button>
        </div>
      </form>
     </div>
    </div>
  )
}

export default AddTherapists