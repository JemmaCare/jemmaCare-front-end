const AddTherapists = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-teal-600 py-10 px-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-8">Add Therapist</h1>
        <form>
          <div className="space-y-4">
            <div>
              <label htmlFor="therapistName" className="block text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="therapistName"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="overview" className="block text-gray-700 mb-1">
                Overview
              </label>
              <input
                type="text"
                id="overview"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="profilePicture" className="block text-gray-700 mb-1">
                Profile Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="institution" className="block text-gray-700 mb-1">
                Institution
              </label>
              <input
                type="text"
                id="institution"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="expertise" className="block text-gray-700 mb-1">
                Expertise
              </label>
              <input
                type="text"
                id="expertise"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-gray-700 mb-1">
                Experience
              </label>
              <input
                type="text"
                id="experience"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="nationality" className="block text-gray-700 mb-1">
                Nationality
              </label>
              <input
                type="text"
                id="nationality"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-gray-700 mb-1">
                Gender
              </label>
              <input
                type="text"
                id="gender"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="h-10 w-48 text-white font-bold bg-teal-500 rounded-full hover:bg-teal-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTherapists;
