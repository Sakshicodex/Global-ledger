import React from 'react';
import Navbar from './Navbar';
import MyFooter from './Footer';
const PricingPage = () => {

  const tiers = [
    {
      name: 'Blue Ledger',
      price: '$1000/MO',
      services: [true, true, true, true, 'Add-on Available', 'Add-on Available', 'Add-on Available', 'Add-on Available', ]      ,
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-500',
      hoverBgColor: 'hover:bg-blue-600',
    },
    {
      name: 'Green Ledger',
      price: '$2500/MO',
      services: [true, true, true, true, true, true, true, 'Add-on Available']      ,
      borderColor: 'border-green-500',
      bgColor: 'bg-green-500',
      hoverBgColor: 'hover:bg-green-600',
    },
    {
      name: 'Golden Ledger',
      price: '$5000/MO',
      services: [true, true, true, true, true, true, true, true],     
      borderColor: 'border-yellow-500',
      bgColor: 'bg-yellow-500',
      hoverBgColor: 'hover:bg-yellow-600',
    },
  ];
  const CheckIcon = () => (
    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );
  const CrossIcon = () => (
    <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
  // Define the services
  const services = [
    'Annual Accounting',
    'Regular Accounting',
    'Cloud Accounting Software',
    'Bank Reconciliation',
    'Daily Bookkeeping',
    'Daily Support',
    'Monthly Management Report',
    'Compliance Support'
    // Add any other services here if needed
  ];
  
 

  // Define the pricing tiers
  

  return (
    <div className=" animated-gradient bg-gray-100 py-8 fadeIn">
      <Navbar />
      <div className="container mx-auto px-4 mt-24">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Pricing</h1>
        <p className="text-xl text-center mb-12 text-gray-600">Reasonable & Flexible Plans.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {tiers.map((tier, index) => (
            <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg p-6 m-2 bg-white">
              <h2 className={`text-lg font-bold text-center mb-2 ${tier.borderColor}`}>{tier.name}</h2>
              <p className="text-4xl font-bold text-center my-4">{tier.price}</p>
              <ul className="text-left mb-8">
                {tier.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-center mb-2">
                    <span className={`${service === true ? 'text-green-500' : 'text-red-500'} mr-2`}>
                      {service === true ? <CheckIcon /> : <CrossIcon />}
                    </span>
                    <span className="text-gray-700">{services[serviceIndex]}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full ${tier.bgColor} text-white py-3 rounded-lg font-medium ${tier.hoverBgColor} transition duration-300`}>
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
