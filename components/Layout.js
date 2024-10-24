// components/Layout.js
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import Footer from './Footer'; 

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Head>
        <title>E-Waste Website - RE BYTE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-black p-4 shadow-md fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center max-w-4xl"> {/* Adjusted max width */}
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">
            <Link href="/">RE BYTE</Link>
          </h1>

          {/* Navbar Links */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/about" className="text-white hover:text-gray-400 transition duration-200">About Us</Link>
            </li>
            <li>
              <Link href="/sell" className="text-white hover:text-gray-400 transition duration-200">Buy/Sell</Link>
            </li>
            <li>
              <Link href="/calc" className="text-white hover:text-gray-400 transition duration-200">Calculator</Link>
            </li>
            <li>
              <Link href="/recycle" className="text-white hover:text-gray-400 transition duration-200">Misc</Link>
            </li>

          </ul>

          <div className="md:hidden">
            <button id="mobile-menu-button" className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        <div id="mobile-menu" className="md:hidden bg-black p-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-400 transition duration-200">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-400 transition duration-200">About</Link>
            </li>
            <li>
              <Link href="/recycle" className="text-white hover:text-gray-400 transition duration-200">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        <div className="container mx-auto max-w-4xl"> 

          {children}
        </div>
      </main>


      <Footer /> 
      <Analytics />
    </div>
  );
}
