"use client"
import { useRouter } from 'next/navigation';

const questionnaire = () => {
  return (
    <div>
      <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
        <h2 className="text-2xl font-medium mb-4">Survey</h2>
        <form>
          <div class="flex flex-wrap w-80 h-auto gap-2 scale-75">
            <label htmlFor="gender">Gender</label>
            <input
              value="value-1"
              name="value-radio"
              id="value-1"
              type="radio"
              class="absolute opacity-0 i_female"
            />
            <input
              value="value-2"
              name="value-radio"
              id="value-2"
              type="radio"
              class="absolute opacity-0 i_no-gender"
            />
            <input
              value="value-3"
              name="value-radio"
              id="value-3"
              type="radio"
              class="absolute opacity-0 i_male"
            />

            <div class="relative h-24 w-24 border border-gray-500 bg-gray-300 rounded-lg transition duration-200 text-gray-500 female">
              <svg
                class="absolute top-2 left-1/2 transform -translate-x-1/2"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 15.75A7.125 7.125 0 1 0 12 1.5a7.125 7.125 0 0 0 0 14.25Z"></path>
                <path d="M12 15.75v6.75"></path>
                <path d="M14.719 19.5H9.28"></path>
              </svg>
              <div class="absolute w-full text-center text-lg font-bold bottom-0">
                Female
              </div>
            </div>

            <div class="relative h-24 w-24 border border-gray-500 bg-gray-300 rounded-lg transition duration-200 text-gray-500 no-gender">
              <svg
                class="absolute top-2 left-1/2 transform -translate-x-1/2"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M10.125 15.75a6.375 6.375 0 1 0 0-12.75 6.375 6.375 0 0 0 0 12.75Z"></path>
                <path d="M10.125 16.5v6"></path>
                <path d="M12.75 19.5H7.5"></path>
                <path d="M20.25 5.25V1.5H16.5"></path>
                <path d="M15.717 6.034 20.25 1.5"></path>
              </svg>
              <div class="absolute w-full text-center text-lg font-bold bottom-0">
                N/A
              </div>
            </div>

            <div class="relative h-24 w-24 border border-gray-500 bg-gray-300 rounded-lg transition duration-200 text-gray-500 male">
              <svg
                class="absolute top-2 left-1/2 transform -translate-x-1/2"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M10.125 21a7.125 7.125 0 1 0 0-14.25 7.125 7.125 0 0 0 0 14.25Z"></path>
                <path d="M21 7.5V3h-4.5"></path>
                <path d="M15.188 8.813 21 3"></path>
              </svg>
              <div class="absolute w-full text-center text-lg font-bold bottom-0">
                Male
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="text"
              name="age"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            ></input>
          </div>

          <div>
            <label htmlFor="Handedness">Handedness</label>

            <div class="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Right Handedness
              </label>
            </div>
            <div class="flex items-center">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-2"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Left Handedness
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
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

export default questionnaire;
