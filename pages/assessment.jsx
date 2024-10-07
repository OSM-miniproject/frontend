import React from 'react'
import Navbar from '@/components/Navbar'
const assessment = () => {
  return (
    <div>
      <Navbar/>
      <div>Story</div>

     
      <div>
            <button
              type="submit"
              onClick={handleButtonClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
    </div>
  )
}

export default assessment
