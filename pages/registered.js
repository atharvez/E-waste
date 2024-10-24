import Layout from '../components/Layout';
import Link from 'next/link';

const RegisteredPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Product Registered Successfully!</h1>
        <p className="text-center text-gray-700 mb-6">
          Thank you for registering your product with us. You can now view your registered products or continue shopping.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/sell">
            <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800">
              Continue Shopping
            </button>
          </Link>
          <Link href="/myp">
            <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
              View My Products
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default RegisteredPage;
