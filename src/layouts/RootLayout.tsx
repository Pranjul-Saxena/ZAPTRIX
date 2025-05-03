import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout; 