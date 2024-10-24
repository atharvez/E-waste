import React from 'react';
import Layout from '../components/Layout';

const MyProductsPage = () => {
  const myProducts = [
    { 
      id: 1, 
      name: 'Old Phone', 
      brandModel: 'Brand A', 
      year: '2020', 
      condition: 4, 
      price: '₹10,000', 
      img: 'https://i.imgur.com/8Q2BvVZ.jpeg' 
    },
    { 
      id: 2, 
      name: 'Used Smartwatch', 
      brandModel: 'Brand B', 
      year: '2019', 
      condition: 3, 
      price: '₹2,000', 
      img: 'https://i.imgur.com/EaSU4rr.jpeg' 
    },
    { 
      id: 3, 
      name: 'Headphones', 
      brandModel: 'Brand C', 
      year: '2021', 
      condition: 5, 
      price: '₹3,000', 
      img: 'https://i.imgur.com/8LbdRlW.jpeg' 
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">My Registered Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {myProducts.length === 0 ? (
            <p className="text-center text-gray-500">No products registered yet.</p>
          ) : (
            myProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                <img 
                  src={product.img} // Use the img property for the image source
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4" // Style the image
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="mt-2 text-gray-700">Brand/Model: {product.brandModel}</p>
                <p className="mt-2 text-gray-700">Year: {product.year}</p>
                <p className="mt-2 text-gray-700">Condition: {product.condition} ★</p>
                <p className="mt-2 text-gray-700">Price: {product.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MyProductsPage;
