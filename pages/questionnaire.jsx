"use client"
import { useRouter } from 'next/navigation';
import '../src/app/globals.css';

const Questionnaire = () => {
  const router = useRouter();

  const handleButtonClick = () => {
  
    router.push('/assessment');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white border rounded-lg px-8 py-6 max-w-2xl shadow-md">
        <h2 className="text-2xl font-medium mb-4">Survey</h2>
        <form>
          {/* Gender Selection */}
          <div className="flex flex-wrap w-80 h-auto gap-2">
            <label htmlFor="gender" className="w-full">Gender</label>

            <input
              value="female"
              name="gender"
              id="gender-female"
              type="radio"
              className="hidden"
            />
            <input
              value="na"
              name="gender"
              id="gender-na"
              type="radio"
              className="hidden"
            />
            <input
              value="male"
              name="gender"
              id="gender-male"
              type="radio"
              className="hidden"
            />

            {/* Female Option */}
            <label htmlFor="gender-female" className="relative h-24 w-24 border border-gray-500 bg-gray-300 rounded-lg transition duration-200 cursor-pointer">
              <svg
                aria-label="Female"
                className="absolute top-2 left-1/2 transform -translate-x-1/2"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 15.75A7.125 7.125 0 1 0 12 1.5a7.125 7.125 0 0 0 0 14.25Z"></path>
                <path d="M12 15.75v6.75"></path>
                <path d="M14.719 19.5H9.28"></path>
              </svg>
              <div className="absolute w-full text-center text-lg font-bold bottom-0">Female</div>
            </label>

            {/* N/A Option */}
            <label htmlFor="gender-na" className="relative h-24 w-24 border border-gray-500 bg-gray-300 rounded-lg transition duration-200 cursor-pointer">
              <svg
                aria-label="N/A"
                className="absolute top-2 left-1/2 transform -translate-x-1/2"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M10.125 15.75a6.375 6.375 0 1 0 0-12.75 6.375 6.375 0 0 0 0 12.75Z"></path>
                <path d="M10.125 16.5v6"></path>
                <path d="M12.75 19.5H7.5"></path>
                <path d="M20.25 5.25V1.5H16.5"></path>
                <path d="M15.717 6.034 20.25 1.5"></path>
              </svg>
              <div className="absolute w-full text-center text-lg font-bold bottom-0">N/A</div>
            </label>

            {/* Male Option */}
            <label htmlFor="gender-male" className="relative h-24 w-24 border border-gray-500 bg-gray-300 rounded-lg transition duration-200 cursor-pointer">
              <svg
                aria-label="Male"
                className="absolute top-2 left-1/2 transform -translate-x-1/2"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M10.125 21a7.125 7.125 0 1 0 0-14.25 7.125 7.125 0 0 0 0 14.25Z"></path>
                <path d="M21 7.5V3h-4.5"></path>
                <path d="M15.188 8.813 21 3"></path>
              </svg>
              <div className="absolute w-full text-center text-lg font-bold bottom-0">Male</div>
            </label>
          </div>

          {/* Age Input */}
          <div className="mt-4">
            <label htmlFor="age" className="block">Age</label>
            <input
              id="age"
              type="text"
              name="age"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* Handedness */}
          <div className="mt-4">
            <label htmlFor="handedness" className="block">Handedness</label>
            <div className="flex items-center mb-4">
              <input
                id="right-handed"
                type="radio"
                name="handedness"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="right-handed" className="ml-2 text-sm font-medium text-gray-900">
                Right Handedness
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="left-handed"
                type="radio"
                name="handedness"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="left-handed" className="ml-2 text-sm font-medium text-gray-900">
                Left Handedness
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              onClick={handleButtonClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
