import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Newsletter = () => {
  // Define the animation variant
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
        className="text-center px-4 lg:px-14"
      >
        <h2 className="text-3xl lg:text-5xl font-semibold mb-6 leading-snug text-neutralBlack">
          Get Started Today
        </h2>
        <p className="mb-6 text-neutralBlack">
          Join hundreds of business owners nationwide that trust AccountedFor with their books.
        </p>
        {/* Replace the button with a Link component */}
        <Link
  to="/pricing"
  style={{ backgroundColor: '#004aad' }} // Added inline style for background color
  className="text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out"
>
  View Pricing
</Link>
      </motion.div>
    </div>
  );
};

export default Newsletter;
