import React from 'react';
import logo from "../assets/logo.png";

const SplashScreen = ({ onAnimationEnd }) => {
  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center flex-col z-50 animate-zoom-out" onAnimationEnd={onAnimationEnd}>
      <img src={logo} alt="Global Ledger Logo" className="w-40 animate-spin" />
      <h1 className="mt-4 text-2xl font-semibold text-gray-800">Accounting - Beyond Borders</h1>
    </div>
  );
};

export default SplashScreen;
