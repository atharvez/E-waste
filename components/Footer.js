// components/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-4 mt-10">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} RE BYTE. All rights reserved.
        </p>
        <p className="text-xs">
          Follow us on{' '}
          <Link href="https://www.instagram.com/team_green_flags/profilecard/" className="text-blue-400 hover:underline">
            Instagram
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
