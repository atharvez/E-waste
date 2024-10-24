import React, { useState } from 'react';

const ExpandableCard = ({ title, content, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-64 m-2 cursor-pointer" onClick={handleToggle}>
      <div className={`bg-white rounded-lg shadow-md transition-all duration-300 overflow-hidden ${isExpanded ? 'h-64' : 'h-32'}`}>
        <img src={image} alt={title} className="w-full h-32 object-cover" />
        <div className={`p-4 ${isExpanded ? '' : 'hidden'}`}>
          <h3 className="text-xl font-semibold mb-2 text-cyan-400">{title}</h3>
          <p className="text-black mb-4">{content}</p>
          {/* Remove the Link and button if you want to eliminate them completely */}
          {/* <button className="mt-2 w-full h-10 bg-cyan-400 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:bg-green-500 hover:scale-105 shadow-lg">
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ExpandableCard;
