'use client';

import { useState } from 'react';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data: ', formData);
    // You can redirect the user to the actual assessment page here.
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

        {/* Repeat similar structure for the remaining questions */}

        {/* Button to proceed */}
        <button
          type="submit"
          className="px-4 py-2 bg-[#FF7D3D] text-white rounded-md mt-4"
        >
          Proceed to Assessment
        </button>
      </form>
    </div>
  );
};

export default AssessmentPage;
