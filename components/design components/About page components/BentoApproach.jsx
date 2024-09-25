import React, { useState } from 'react';

const SevenStepsLayout = () => {
  // State to track the expanded steps (initially all false)
  const [expandedSteps, setExpandedSteps] = useState(Array(7).fill(false));

  // Step titles data
  const steps = [
    { id: 1, title: "Requirements & Ojectives" },
    { id: 2, title: "Design the Architecture" },
    { id: 3, title: "Choose Technologies" },
    { id: 4, title: "Development" },
    { id: 5, title: "Testing" },
    { id: 6, title: "Deployment" },
    { id: 7, title: "Maintenance" },
  ];

  // Function to toggle the expanded state of a step
  const toggleStep = (id) => {
    setExpandedSteps((prev) =>
      prev.map((isExpanded, index) => (index === id - 1 ? !isExpanded : isExpanded))
    );
  };

  return (
    <div className="w-full h-auto p-6 bg-black/90">
      <div className="sm:grid grid-cols-1 sm:grid-cols-3 gap-6 space-y-8">
        {/* Step 1 - Large block spanning two rows */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center cursor-pointer row-span-2"
          onClick={() => toggleStep(1)}>
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-semibold mb-2">
            {steps[0].id}
          </div>
          {expandedSteps[0] && (
            <h4 className="text-gray-800 text-lg font-bold text-center">{steps[0].title}</h4>
          )}
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center cursor-pointer col-span-2"
          onClick={() => toggleStep(2)}>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-semibold mb-2">
            {steps[1].id}
          </div>
          {expandedSteps[1] && (
            <h4 className="text-gray-800 text-lg font-bold text-center">{steps[1].title}</h4>
          )}
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => toggleStep(3)}>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-semibold mb-2">
            {steps[2].id}
          </div>
          {expandedSteps[2] && (
            <h4 className="text-gray-800 text-lg font-bold text-center">{steps[2].title}</h4>
          )}
        </div>

        {/* Step 4 - Large block spanning two columns (mirrored to Step 1) */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center  justify-center cursor-pointer row-span-2"
          onClick={() => toggleStep(4)}>
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-semibold mb-2">
            {steps[3].id}
          </div>
          {expandedSteps[3] && (
            <h4 className="text-gray-800 text-lg font-bold text-center">{steps[3].title}</h4>
          )}
        </div>

        {/* Step 5 - Mirroring Step 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center cursor-pointer col-span-2"
          onClick={() => toggleStep(5)}>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-semibold mb-2">
            {steps[4].id}
          </div>
          {expandedSteps[4] && (
            <h4 className="text-gray-800 text-lg font-bold text-center">{steps[4].title}</h4>
          )}
        </div>

        {/* Step 6 - Mirroring Step 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => toggleStep(6)}>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-semibold mb-2">
            {steps[5].id}
          </div>
          {expandedSteps[5] && (
            <h4 className="text-gray-800 text-lg font-bold text-center">{steps[5].title}</h4>
          )}
        </div>

        {/* Empty Div for Space */}
        <div className="w-full sm:w-8"></div> {/* Adjust width as necessary for spacing */}

        {/* Step 7 - On the same line as Step 6 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center cursor-pointer col-span-2 sm:col-span-1"
          onClick={() => toggleStep(7)}>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-semibold mb-2">
            {steps[6].id}
          </div>
          {expandedSteps[6] && (
            <h4 className="text-gray-800 text-lg font-bold text-center">{steps[6].title}</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default SevenStepsLayout;
