import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import ExpandableCard from '../components/holder';

const additionalServices = [
  {
    title: 'E-Waste Collection',
    content: 'We offer collection services for e-waste from your location to ensure proper recycling.',
    image: 'https://i.imgur.com/IWBItlF.jpeg',
  },
  {
    title: 'Recycling Education',
    content: 'Learn about the recycling process and how to dispose of e-waste responsibly.',
    image: 'https://i.imgur.com/Ggv5drx.jpeg',
  },
  {
    title: 'Sustainable Solutions',
    content: 'Discover sustainable solutions for your old electronics and gadgets.',
    image: 'https://i.imgur.com/JFZjq83.jpeg',
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsScrolled(scrolled > 0);
      const newOpacity = Math.max(1 - scrolled / 400, 0.5);
      setBgOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>RE BYTE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className={`fixed top-0 left-0 w-full text-center py-5 z-30 transition duration-300 ease-in-out ${isScrolled ? 'bg-gradient-to-b from-white to-transparent shadow-md' : 'bg-transparent'}`}>
        <h1 className={`text-5xl md:text-7xl border-violet-300 font-sans font-bold tracking-wide ${isScrolled ? 'text-black shadow-md' : 'text-white'} ${isScrolled ? 'text-shadow-md' : ''}`}>
          RE BYTE
        </h1>
      </header>

      <div 
        className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center pt-24 px-4 sm:px-6 lg:px-8" 
        style={{ 
          backgroundImage: "url('https://i.imgur.com/CYAXVMl.jpeg')",
          opacity: bgOpacity,
          transition: 'opacity 0.5s ease-in-out'
        }} 
      >
        <div className="flex flex-col justify-center items-center text-center text-white p-6 bg-black bg-opacity-50 rounded-lg">
          <p className="text-lg md:text-2xl font-semibold mb-4">
            The world generates approximately 50 to 60 million metric tons of e-waste annually.
          </p>
          <p className="text-sm md:text-base mb-8">
            Find out how environmentally conscious you are.
          </p>

          <Link href="/calc">
            <button className="w-32 h-12 bg-gray-200 rounded-full text-black transition duration-300 ease-in-out transform hover:scale-105">
              Check out
            </button>
          </Link>
        </div>
      </div>

      <section className="py-16 bg-black">
        <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
        <div className="flex flex-wrap justify-center items-center">
          {additionalServices.map((service, index) => (
            <div key={index} className="flex-shrink-0">
              <ExpandableCard 
                title={service.title} 
                content={service.content} 
                image={service.image} 
                link={service.link} 
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
