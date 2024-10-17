'use client';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation'


const AssessmentPage = () => {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    personality: '',
    handedness: '',
    illnessFear: 0,
    deathFear: 0,
    nightStartled: 0,
    sleepHours: 0,
    hoarding: 0,
    repetitiveActions: 0,
    sequenceRestless: 0,
    avoidTouch: 0,
    thoughtControl: 0,
    checkThings: 0,
    itemsArranged: 0,
    handWashing: 0,
    engrossedThoughts: 0,
    checkingGas: 0,
    repulsiveThoughts: 0
  });


  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  
    // Send the form data to the backend API (POST request)
    try {
      const response = await fetch('http://localhost:5000/api/responses', {  // Change URL to backend server
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data in the request body
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log('Data saved successfully:', result);
        toast.success(result.message || 'Assessment data received successfully!');
        router.push('/stories');
      } else {
        console.error('Error saving data:', result.message);
        toast.error(result.message || 'Failed to save assessment data.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  
  
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Basic Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        {/* Gender */}
        <label className="block mb-4">
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="block w-full mt-1"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        {/* Age */}
        <label className="block mb-4">
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        {/* Personality */}
        <label className="block mb-4">
          Personality:
          <select
            name="personality"
            value={formData.personality}
            onChange={handleInputChange}
            className="block w-full mt-1"
          >
            <option value="">Select</option>
            <option value="introvert">Introvert</option>
            <option value="ambivert">Ambivert</option>
            <option value="extrovert">Extrovert</option>
          </select>
        </label>

        {/* Handedness */}
        <label className="block mb-4">
          Handedness:
          <select
            name="handedness"
            value={formData.handedness}
            onChange={handleInputChange}
            className="block w-full mt-1"
          >
            <option value="">Select</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </label>

        {/* OCD-related questions */}
        <label className="block mb-4">
          I constantly fear that I will develop a serious illness.
          <input
            type="range"
            name="illnessFear"
            min="0"
            max="5"
            value={formData.illnessFear}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          I constantly fear death.
          <input
            type="range"
            name="deathFear"
            min="0"
            max="5"
            value={formData.deathFear}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          I wake up startled at night.
          <input
            type="range"
            name="nightStartled"
            min="0"
            max="5"
            value={formData.nightStartled}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          I get a full 7-8 hours of sleep.
          <input
            type="range"
            name="sleepHours"
            min="0"
            max="5"
            value={formData.sleepHours}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          I have a habit of hoarding unnecessary items.
          <input
            type="range"
            name="hoarding"
            min="0"
            max="5"
            value={formData.hoarding}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          I repeatedly perform one or more actions for a long time.
          <input
            type="range"
            name="repetitiveActions"
            min="0"
            max="5"
            value={formData.repetitiveActions}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          The sequence of actions is fixed. If it doesn’t happen that way, I get restless.
          <input
            type="range"
            name="sequenceRestless"
            min="0"
            max="5"
            value={formData.sequenceRestless}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          I avoid touching certain objects because I feel they are dirty.
          <input
            type="range"
            name="avoidTouch"
            min="0"
            max="5"
            value={formData.avoidTouch}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          I feel the need to control my thoughts to avoid unwanted ones.
          <input
            type="range"
            name="thoughtControl"
            min="0"
            max="5"
            value={formData.thoughtControl}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          I often check things repeatedly (e.g., doors, locks, etc.).
          <input
            type="range"
            name="checkThings"
            min="0"
            max="5"
            value={formData.checkThings}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          I like to arrange items in a specific order or pattern.
          <input
            type="range"
            name="itemsArranged"
            min="0"
            max="5"
            value={formData.itemsArranged}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          I wash my hands excessively to avoid contamination.
          <input
            type="range"
            name="handWashing"
            min="0"
            max="5"
            value={formData.handWashing}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          I get lost in my thoughts for long periods.
          <input
            type="range"
            name="engrossedThoughts"
            min="0"
            max="5"
            value={formData.engrossedThoughts}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          I frequently check if the gas is turned off.
          <input
            type="range"
            name="checkingGas"
            min="0"
            max="5"
            value={formData.checkingGas}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        <label className="block mb-4">
          I have repulsive thoughts that I cannot control.
          <input
            type="range"
            name="repulsiveThoughts"
            min="0"
            max="5"
            value={formData.repulsiveThoughts}
            onChange={handleInputChange}
            className="block w-full mt-1"
          />
        </label>

        {/* Button to proceed */}
        <button
          type="submit"
          className="px-4 py-2 bg-[#FF7D3D] text-white rounded-md mt-4"
        >
          Proceed to Assessment
        </button>
        <ToastContainer/>
      </form>
    </div>
  );
};

export default AssessmentPage;