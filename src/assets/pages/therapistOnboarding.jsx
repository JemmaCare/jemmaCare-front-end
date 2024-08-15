

const TherapistOnboarding = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10 bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-xl bg-white shadow-md">
        <div className="flex flex-col justify-center w-full p-6 bg-[#10CC9F] rounded-l-xl">
          <form className="space-y-6">
            <div className="text-center text-bold text-white mb-6">
              <h1 className="text-2xl font-bold">Help Us Know You Better</h1>
            </div>
            <div>
              <label htmlFor="profilePicture" className="block text-white mb-1">
                Profile Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                placeholder=""
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="therapyType" className="block text-white mb-1">
                Expertise
              </label>
              <select
                id="expertise"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              >
                <option value="bipolar">Bipolar</option>
                <option value="depression">Depression</option>
                <option value="psychosis">Psychosis</option>
                <option value="anxiety">Anxiety</option>
                <option value="personality disorder">Personality Disorders</option>
                <option value="schizophrenia">Schizophrenia</option>
                <option value="body dysmorphic disorder">Body Dysmorphic Disorder</option>
                <option value="obssessive compulsive disorder">Obssessive Compulsive Disorder</option>
                <option value="postpartum depression">Postpartum Depression</option>
              </select>
            </div>
            <div>
              <label htmlFor="overview" className="block text-white mb-1">
               Overview
              </label>
              <input
                type="text"
                id="overview"
                placeholder=""
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="nationality" className="block text-white mb-1">
                Nationality
              </label>
              <select
                id="nationality"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              >
                <option value="nationality">Nationality</option>
                <option value="ghana">Ghana</option>
                <option value="nigeria">Nigeria</option>
                <option value="zimbabwe">Zimbabwe</option>
                <option value="uganda">Uganda</option>
              </select>
            </div>
            <div>
              <label htmlFor="phone" className="block text-white mb-1">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                placeholder=""
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-white mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder=""
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-white mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder=""
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-white mb-1">
                Gender
              </label>
              <select
                id="gender"
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              >
                <option value="" disabled selected>Gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            <div>
              <label htmlFor="experienceYears" className="block text-white mb-1">
                Experience(Years)
              </label>
              <input
                type="number"
                id="experienceYears"
                placeholder=""
                className="bg-white h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-md"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-[#10CC9F] text-lg font-bold m-4 h-12 w-48 px-3 py-2 bg-white border-2 rounded-3xl hover:bg-teal-100 hover:text-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TherapistOnboarding;
