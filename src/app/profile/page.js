"use client";
import "../globals.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Time Spent (hours)",
      data: [2, 3, 4, 5, 6, 7, 8],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Time Spent on Activities",
    },
  },
};

export default function Profile() {
  const [date, setDate] = useState(new Date());
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // Optional: Log the user object to check the photoURL
        console.log(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleCounselorSelect = (name) => {
    setSelectedCounselor(name);
  };

  return (
    <main className="p-8 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Profile Page</h1>

      <div className="max-w-2xl bg-white p-6 rounded-lg shadow mx-auto border border-gray-300 hover:border-blue-500 transition duration-300">
        <div className="flex flex-col sm:flex-row items-center mb-6">
          <img
            src={user?.photoURL || "/path/to/default-user-image.jpg"}
            alt="User Image"
            className="w-16 h-16 rounded-full mr-4 mb-4 sm:mb-0 border border-gray-300 hover:border-blue-500 transition duration-300"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold">{user?.displayName || "User Name"}</h2>
            <p className="text-gray-600">Hello, welcome back!</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <p className="font-medium">{user?.displayName || "User Name"}</p>
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <p className="font-medium">{user?.email || "user@example.com"}</p>
            </div>
            {/* Add other user information as needed */}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Activity Chart</h2>
          <div className="w-full overflow-x-auto">
            <Line data={data} options={options} />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Meditation Schedule</h2>
          <div className="flex flex-col items-center">
            <p className="mb-4">Current Date: {date.toDateString()}</p>
            <div className="w-full max-w-xs">
              <Calendar
                onChange={setDate}
                value={date}
                className="rounded-lg shadow"
                tileContent={({ date, view }) => {
                  if (view === "month") {
                    if (date.getDay() === 2) {
                      return <p className="text-xs">Meditation: 7:00 AM</p>;
                    } else if (date.getDay() === 4) {
                      return <p className="text-xs">Yoga: 6:00 AM</p>;
                    } else if (date.getDay() === 6) {
                      return <p className="text-xs">Running: 8:00 AM</p>;
                    }
                  }
                  return null;
                }}
              />
            </div>
          </div>
        </div>
        <div className="bg-white text-black p-6 rounded-md space-y-8 shadow border border-gray-300 hover:border-blue-500 transition duration-300">
          {/* Test Results */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Test Results:</h3>
            <p className="w-full p-3 mb-4 rounded-md bg-gray-100 border border-gray-300 hover:border-blue-500 transition duration-300">
              Time outcome date
            </p>
            <p className="w-full p-3 mb-4 rounded-md bg-gray-100 border border-gray-300 hover:border-blue-500 transition duration-300">
              Result placeholder 1
            </p>
            <p className="w-full p-3 mb-4 rounded-md bg-gray-100 border border-gray-300 hover:border-blue-500 transition duration-300">
              Result placeholder 2
            </p>
          </div>

          {/* Ongoing Stories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ongoing Stories</h3>
            <p className="w-full p-3 mb-4 rounded-md bg-gray-100 border border-gray-300 hover:border-blue-500 transition duration-300">
              Ongoing stories content
            </p>
          </div>

          {/* Counselor Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Counselor connect:</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="counselor"
                  value="Counselor 1"
                  checked={selectedCounselor === "Counselor 1"}
                  onChange={() => handleCounselorSelect("Counselor 1")}
                  className="form-radio text-blue-500"
                />
                <span>Name and qualification 1</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="counselor"
                  value="Counselor 2"
                  checked={selectedCounselor === "Counselor 2"}
                  onChange={() => handleCounselorSelect("Counselor 2")}
                  className="form-radio text-blue-500"
                />
                <span>Name and qualification 2</span>
              </label>
            </div>
          </div>

          {/* Resource Reading/Saved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Resource reading/saved
            </h3>
            <input
              className="w-full p-3 mb-4 rounded-md bg-gray-100 border border-gray-300 placeholder-gray-400 hover:border-blue-500 transition duration-300"
              type="text"
              placeholder="Resource link 1"
            />
            <input
              className="w-full p-3 mb-4 rounded-md bg-gray-100 border border-gray-300 placeholder-gray-400 hover:border-blue-500 transition duration-300"
              type="text"
              placeholder="Resource link 2"
            />
            <div className="text-right text-blue-400 cursor-pointer hover:text-blue-600 transition duration-300">
              View more
            </div>
          </div>

          {/* Have any problems */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Have any problems</h3>
            <textarea
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 placeholder-gray-400 hover:border-blue-500 transition duration-300"
              placeholder="Write to us"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <div className="space-y-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Edit Profile
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2 transition duration-300">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
