import React from 'react';
import Layout from '../components/Layout';

const AboutUs = () => {
  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-5xl font-bold text-center mb-8 text-gradient">
          About Us
        </h1>
        
        <p className="text-lg text-gray-800 mb-6">
          At <strong className="text-blue-600">RE BYTE</strong>, we’re all about making tech sustainable and eco-friendly! 🌍 Our mission? To tackle the e-waste crisis with innovative recycling and remanufacturing solutions that help save our planet, one gadget at a time. 
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-pink-500">Why Choose Us?</h2>
        <ul className="list-disc list-inside mb-6 text-gray-800">
          <li>🔄 Comprehensive e-waste recycling services</li>
          <li>🌱 Commitment to environmental sustainability</li>
          <li>🔧 Expertise in remanufacturing processes</li>
          <li>🤝 Community-focused initiatives and partnerships</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-pink-500">Our Process</h2>
        <p className="text-lg text-gray-800 mb-6">
          We follow a streamlined approach to e-waste recycling and remanufacturing. Our process includes collection, assessment, dismantling, recycling, and resale of refurbished devices—always done responsibly and efficiently!
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-pink-500">Join Us in Making a Difference</h2>
        <p className="text-lg text-gray-800 mb-6">
          Together, we can create a more sustainable future. Join our mission to reduce e-waste and promote recycling initiatives. Your participation truly makes a difference! ✨
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-pink-500">Our Vision</h2>
        <p className="text-lg text-gray-800 mb-6">
          To be a leader in e-waste recycling and remanufacturing, setting the standard for responsible practices and making a lasting impact on our environment.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-pink-500">Founders</h2>
        <p className="text-lg text-gray-800 mb-6">
          <strong className="text-blue-600">Atharva Desai</strong>, <strong className="text-blue-600">Varda Gachake</strong>, <strong className="text-blue-600">Sharwari Kathole</strong>, and <strong className="text-blue-600">Aniket Damedhar</strong> are the passionate visionaries behind <strong>RE BYTE</strong>. Their dedication and innovative spirit drive our mission to make tech sustainable and eco-friendly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <img src="https://i.imgur.com/4EFPrq8.jpeg" alt="E-waste collection" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">E-Waste Collection</h3>
            <p className="mt-2 text-gray-700">We offer convenient collection services for your e-waste, ensuring responsible disposal.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <img src="https://i.imgur.com/9a9aSe3.jpeg" alt="Recycling process" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">Recycling Process</h3>
            <p className="mt-2 text-gray-700">Our advanced recycling techniques recover valuable materials while protecting the environment.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <img src="https://i.imgur.com/QD2pODu.jpeg" alt="Community initiatives" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">Community Initiatives</h3>
            <p className="mt-2 text-gray-700">We collaborate with local organizations to raise awareness about e-waste recycling and its benefits.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
