"use client";
import React from "react";

const WhatIsOCD = () => {
  return (
    <section className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">What is OCD?</h2>
      <p className="text-gray-700 text-lg mb-4">
        Obsessive-Compulsive Disorder (OCD) is a mental health condition
        characterized by recurring, unwanted thoughts (obsessions) and
        repetitive behaviors (compulsions). These compulsions are often
        performed to ease the distress caused by the obsessions, but they offer
        only temporary relief.
      </p>

      <p className="text-gray-700 text-lg mb-4">
        OCD can affect anyone, regardless of age or background. It goes beyond
        just a need for cleanliness or order and involves various fears and
        compulsions that can significantly impact daily life. However, OCD is
        treatable, and with the right support, individuals can manage their
        symptoms effectively.
      </p>

      <ul className="list-disc list-inside text-gray-700 text-lg">
        <li>OCD is not limited to specific fears like contamination or order.</li>
        <li>It can involve unwanted violent, intrusive, or inappropriate thoughts.</li>
        <li>
          Though distressing, OCD can be treated with therapy, medication, and
          support.
        </li>
      </ul>
    </section>
  );
};

export default WhatIsOCD;
