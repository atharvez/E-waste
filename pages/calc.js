// pages/calculator.js
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Modal from '../components/modal'; // Ensure the filename matches the casing
import Footer from '../components/Footer';

// Device selection options with hazards
const devicesOptions = {
  communication: [
    { name: 'Phone', value: 'phones', weight: 0.5, hazards: 'Lead, Mercury, Cadmium' },
    { name: 'Tablet', value: 'tablets', weight: 0.4, hazards: 'Lead, Brominated Flame Retardants' },
    { name: 'Laptop', value: 'laptops', weight: 2, hazards: 'Lead, Cadmium, Mercury, Lithium' },
  ],
  household: [
    { name: 'Refrigerator', value: 'refrigerators', weight: 45.0, hazards: 'Chlorofluorocarbons (CFCs), Lead' },
    { name: 'Microwave', value: 'microwaves', weight: 4.0, hazards: 'Lead, Brominated Flame Retardants' },
    { name: 'Air Conditioner', value: 'airConditioners', weight: 30.0, hazards: 'CFCs, Lead, Mercury' },
  ],
  entertainment: [
    { name: 'Television', value: 'televisions', weight: 3.5, hazards: 'Lead, Mercury, Cadmium' },
    { name: 'Printer', value: 'printers', weight: 1.5, hazards: 'Lead, Brominated Flame Retardants' },
  ],
};

// DropdownSelect Component
const DropdownSelect = ({ label, name, value, onChange, options }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">{label}:</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-2 w-full rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select a device</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

// CountInput Component
const CountInput = ({ name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">Count:</label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        min="0"
        className="border border-gray-300 p-2 w-full rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

// Calculator Component
const Calculator = () => {
  const [selectedDevices, setSelectedDevices] = useState({
    communication: [],
    household: [],
    entertainment: [],
  });

  const [deviceCounts, setDeviceCounts] = useState({});
  const [totalWaste, setTotalWaste] = useState(0);
  const [hazardList, setHazardList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeviceChange = (e) => {
    const { name, value } = e.target;

    // Prevent selecting the same device multiple times
    if (value && !selectedDevices[name].includes(value)) {
      setSelectedDevices((prev) => ({
        ...prev,
        [name]: [...prev[name], value],
      }));
      // Initialize count for the new device
      setDeviceCounts((prev) => ({
        ...prev,
        [value]: 0,
      }));
    }
  };

  const handleCountChange = (e) => {
    const { name, value } = e.target;
    setDeviceCounts((prev) => ({
      ...prev,
      [name]: parseInt(value) || 0,
    }));
  };

  const calculateTotal = () => {
    const total = Object.keys(selectedDevices).reduce((acc, key) => {
      return acc + selectedDevices[key].reduce((sum, device) => {
        const selectedDevice = devicesOptions[key].find((d) => d.value === device);
        return sum + (selectedDevice ? selectedDevice.weight * deviceCounts[device] : 0);
      }, 0);
    }, 0);
    setTotalWaste(total);

    // Collect hazards for the selected devices
    const hazards = selectedDevices.communication
      .concat(selectedDevices.household)
      .concat(selectedDevices.entertainment)
      .map((device) => {
        const selectedDevice = Object.keys(devicesOptions).flatMap(category =>
          devicesOptions[category]
        ).find(d => d.value === device);
        return selectedDevice ? selectedDevice.hazards : null;
      })
      .filter(Boolean);
    setHazardList(hazards);
    
    // Open modal with results
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Calculate Your E-Waste</h2>

      {/* Boxes for device categories */}
      <div className="flex flex-wrap justify-between mb-6">
        {/* Communication Devices Box */}
        <div className="flex-1 bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-lg shadow-md m-2">
          <h3 className="text-lg font-semibold text-white">Communication Devices</h3>
          <DropdownSelect
            label="Select a communication device"
            name="communication"
            value=""
            onChange={handleDeviceChange}
            options={devicesOptions.communication}
          />
          {selectedDevices.communication.map((device) => (
            <div key={device} className="flex items-center mb-4">
              <span className="font-medium text-white mr-2">
                {devicesOptions.communication.find(d => d.value === device).name}
              </span>
              <CountInput
                name={device}
                value={deviceCounts[device] || ''}
                onChange={handleCountChange}
              />
            </div>
          ))}
        </div>

        {/* Household Appliances Box */}
        <div className="flex-1 bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-lg shadow-md m-2">
          <h3 className="text-lg font-semibold text-white">Household Appliances</h3>
          <DropdownSelect
            label="Select a household appliance"
            name="household"
            value=""
            onChange={handleDeviceChange}
            options={devicesOptions.household}
          />
          {selectedDevices.household.map((device) => (
            <div key={device} className="flex items-center mb-4">
              <span className="font-medium text-white mr-2">
                {devicesOptions.household.find(d => d.value === device).name}
              </span>
              <CountInput
                name={device}
                value={deviceCounts[device] || ''}
                onChange={handleCountChange}
              />
            </div>
          ))}
        </div>

        {/* Entertainment Devices Box */}
        <div className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-lg shadow-md m-2">
          <h3 className="text-lg font-semibold text-white">Entertainment Devices</h3>
          <DropdownSelect
            label="Select an entertainment device"
            name="entertainment"
            value=""
            onChange={handleDeviceChange}
            options={devicesOptions.entertainment}
          />
          {selectedDevices.entertainment.map((device) => (
            <div key={device} className="flex items-center mb-4">
              <span className="font-medium text-white mr-2">
                {devicesOptions.entertainment.find(d => d.value === device).name}
              </span>
              <CountInput
                name={device}
                value={deviceCounts[device] || ''}
                onChange={handleCountChange}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={calculateTotal}
        className="w-full h-12 bg-blue-600 text-white rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Calculate Total E-Waste
      </button>

      {/* Modal for displaying results */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        totalWaste={totalWaste} 
        hazards={hazardList} 
      />
    </div>
  );
};

// Main Calculator Page Component
const CalculatorPage = () => {
  return (
    <Layout>
      <Calculator />
    </Layout>
  );
};

export default CalculatorPage;
