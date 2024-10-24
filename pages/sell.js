import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SellPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('buy');

  const products = [
    { id: 1, name: 'Recycled Phone', price: '₹22,999', img: 'https://i.imgur.com/wm8oauw.jpeg' },
    { id: 2, name: 'Mouse', price: '₹3,999', img: 'https://i.imgur.com/chu6Xky.jpeg' },
    { id: 3, name: 'Laptop', price: '₹57,499', img: 'https://i.imgur.com/cDUOaa2.jpeg' },
  ];

  const [productType, setProductType] = useState('');
  const [brandModel, setBrandModel] = useState('');
  const [year, setYear] = useState('');
  const [condition, setCondition] = useState(0);
  const [price, setPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = { productType, brandModel, year, condition, price };
    console.log(productData);

    // Save the product to local storage for demonstration purposes
    const existingProducts = JSON.parse(localStorage.getItem('registeredProducts')) || [];
    existingProducts.push(productData);
    localStorage.setItem('registeredProducts', JSON.stringify(existingProducts));

    // Redirect to the new page upon registration
    router.push('/registered');

    // Clear form fields
    setProductType('');
    setBrandModel('');
    setYear('');
    setCondition(0);
    setPrice('');
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">E-Waste Marketplace</h1>

        <div className="flex justify-center mb-6">
          <button 
            onClick={() => setActiveTab('buy')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'buy' ? 'bg-black text-white' : 'bg-gray-200'}`}>
            Buy
          </button>
          <button 
            onClick={() => setActiveTab('sell')}
            className={`ml-4 px-4 py-2 rounded-lg ${activeTab === 'sell' ? 'bg-black text-white' : 'bg-gray-200'}`}>
            Sell
          </button>
        </div>

        {activeTab === 'buy' && (
          <>
            <div className="flex justify-center mb-6">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  <Link href={`/product/${product.id}`} passHref>
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
                    />
                  </Link>
                  <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                  <p className="mt-2 text-gray-700">{product.price}</p>
                  <Link href="/cart" passHref>
                    <button className="mt-4 w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 cursor-pointer">
                      Add to Cart
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'sell' && (
          <>
            <h2 className="text-3xl font-bold text-center my-10">Register Your Product</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="productType">
                  Type of Product
                </label>
                <select
                  id="productType"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                >
                  <option value="">Select a device</option>
                  <option value="Phone">Phone</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Headphones">Headphones</option>
                  <option value="Misc">Others</option>

                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="brandModel">
                  Brand/Model
                </label>
                <input
                  type="text"
                  id="brandModel"
                  value={brandModel}
                  onChange={(e) => setBrandModel(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="year">
                  Year
                </label>
                <input
                  type="number"
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Condition</label>
                <div className="flex cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-2xl ${star <= condition ? 'text-yellow-500' : 'text-gray-400'}`}
                      onClick={() => setCondition(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
              >
                Register Product
              </button>
            </form>
          </>
        )}

        <div className="flex justify-center mt-8">
          <Link href="/myp" passHref>
            <button className="mt-4 mr-2 ml-2 w-full max-w-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:bg-gradient-to-l hover:shadow-lg transition duration-300">
              View My Products
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default SellPage;
