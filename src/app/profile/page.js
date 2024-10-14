"use client"
import "../globals.css"
export default function Profile() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Profile Page</h1>
      
      <div className="max-w-2xl bg-white p-6 rounded-lg shadow">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <p className="font-medium">John Doe</p>
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <p className="font-medium">john.doe@example.com</p>
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Location</label>
              <p className="font-medium">New York, USA</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <div className="space-y-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Edit Profile
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}