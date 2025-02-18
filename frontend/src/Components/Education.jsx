import React from 'react';
import {forwardRef} from 'react'

const Education =forwardRef((props,ref) => {
  const educationData = [
    {
        period: "2021 - 2024",
        degree: "Diploma in Computer Science and Engineering",
        institution: "Government Polytechnic Mawana Khurd Meerut",
        details: "Completed my Diploma in Computer Science and Engineering from Government Polytechnic Mawana Khurd Meerut with 72.4% marks.",
  
      },
    {
        period: "2019 - 2021",
        degree: "ITI",
        institution: "S N S K Private ITI Ghazipur",
        details: "Completed my ITI from S N S K Private ITI Ghazipur with 82% marks.",
  
      },
      {
        period: "2017 - 2019",
        degree: "12th Standard",
        institution: "S M S I C Yashauli Prithvipur Ghazipur",
        details: "Completed my 12th Standard from S M S I C Yashauli Prithvipur Ghazipur with 61.3% marks.",
      },
    {
      period: "2015 - 2017",
      degree: "10th Standard",
      institution: "S M S I C Yashauli Prithvipur Ghazipur",
      details: "Completed my 10th Standard from S M S I C Yashauli Prithvipur Ghazipur with 75% marks.",

    },
    
    // Add more entries if needed
  ];

  return (
    <div id="education" ref={ref} className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center  rounded-md mb-12"><span className='text-3xl font-bold bg-[#000033] text-white px-2'>Education</span></h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              {/* Timeline Period */}
              <div className="md:w-1/4 text-center mb-4 md:mb-0">
                <div className="text-xl font-semibold text-[#000033]">{edu.period}</div>
              </div>
              {/* Education Card */}
              <div className="md:w-3/4">
                <div className="p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
                  <h3 className="text-2xl font-bold text-[#000033]">{edu.degree}</h3>
                  <p className="text-gray-600 mt-2">{edu.institution}</p>
                  <p className="mt-2 text-gray-700">{edu.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
})

export default Education;
