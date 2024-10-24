import React from 'react';
import Layout from '../components/Layout';

const eWastePlants = [
  {
    name: 'E-Waste Recyclers India',
    location: 'Mumbai',
    image: 'https://i.imgur.com/nxDya2b.jpeg',
    mapLink: 'https://www.google.com/maps?q=Mumbai+E-Waste+Recyclers+India',
  },
  {
    name: 'Suritex Pvt. Ltd.',
    location: 'Nagpur',
    image: 'https://i.imgur.com/9bVQkKt.jpeg',
    mapLink: 'https://www.google.com/maps?q=Nagpur+Suritex+Pvt.+Ltd.',
  },
  {
    name: 'Electrofine Recycling Pvt Ltd',
    location: 'Satara',
    image: 'https://i.imgur.com/Agmm5Zu.jpeg',
    mapLink: 'https://maps.app.goo.gl/PjjdRdPb9xdCHyEX9',
  },
];

const EWastePage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Key E-Waste Recycling Plants in Maharashtra</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eWastePlants.map((plant, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{plant.name}</h2>
              <p className="mt-2 text-gray-700">{plant.location}</p>
              <a href={plant.mapLink} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-500 underline">
                View on Google Maps
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default EWastePage;
