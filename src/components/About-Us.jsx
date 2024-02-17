import React from 'react';
import PuzzleImage from '../assets/g4.svg';
import ExpertSupportIcon from '../assets/icons8-support.svg';
import TrustedIcon from '../assets/icons8-trust.svg';
import SolutionsIcon from '../assets/icons8-solutions.svg';
import Navbar from './Navbar';
import MyFooter from './Footer';
import MukeshGoelImage from '../assets/mukesh.jpeg';
import UtsavBansalImage from '../assets/utsav.jpeg';
import { FaLinkedinIn } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 py-12">
      <Navbar />

        {/* About Us section */}
        <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left mb-16">
          {/* Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-6">Your Reliable Accounting Partner.</h2>
            <p className="text-lg mb-6">
              Expand your horizons and elevate your business potential. Let
              Global Ledger take the reins of your accounting needs. With our
              expertise, watch your business soar unburdened by financial
              complexities.
            </p>
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img src={PuzzleImage} alt="Global Ledger - Team Collaboration" />
          </div>
        </div>

        {/* Our Values section */}
        <div className="text-center my-16">
          <h3 className="text-gray-600 uppercase text-sm tracking-wider ">Our Values</h3>
          <h2 className="text-6xl font-extrabold text-gray-900 my-4">Our Commitment to Excellence.</h2>
          <p className="max-w-4xl mx-auto mb-12">
            At Global Ledger, we value precision, transparency, and consistency in all our accounting services.
          </p>

          {/* Value Propositions */}
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            {/* Value 1 */}
            <div className="flex flex-col items-center">
              <img src={ExpertSupportIcon} alt="Expert Support" className="mb-4 w-12 h-12" />
              <h4 className="text-2xl font-semibold">Expert Support</h4>
              <p className="text-gray-600 mt-2 ">
                Providing round-the-clock accounting support tailored to your business needs.
              </p>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col items-center">
              <img src={TrustedIcon} alt="Trusted by Many" className="mb-4 w-12 h-12" />
              <h4 className="text-2xl font-semibold">Trusted by Many</h4>
              <p className="text-gray-600 mt-2">
                A legacy of trust built with professional accountants and satisfied clients worldwide.
              </p>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col items-center">
              <img src={SolutionsIcon} alt="Comprehensive Solutions" className="mb-4 w-12 h-12" />
              <h4 className="text-2xl font-semibold">Comprehensive Solutions</h4>
              <p className="text-gray-600 mt-2">
                From bookkeeping to strategic advice, we cover all aspects of financial management.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Team section */}
        <div className="container mx-auto px-4 text-center my-16">
        <h3 className="text-gray-600 uppercase text-sm tracking-wider">Meet Our Team</h3>
        <h2 className="text-4xl font-extrabold text-gray-900 my-4">Meet These Fine Folks.</h2>
        <p className="text-lg mb-12">Meet the experts.</p>
      
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 mb-4 rounded-full overflow-hidden shadow-lg">
              <img src={MukeshGoelImage} alt="Mukesh Goel" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-lg font-semibold">Mukesh Goel</h4>
            <p className="text-gray-600">CO-FOUNDER</p>
            <a href="https://www.linkedin.com/in/mukesh-goel-7486818?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-blue-600 hover:text-blue-800"><FaLinkedinIn /></a>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 mb-4 rounded-full overflow-hidden shadow-lg">
              <img src={UtsavBansalImage} alt="Utsav Bansal" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-lg font-semibold">Utsav Bansal</h4>
            <p className="text-gray-600">CO-FOUNDER</p>
            <a href="#!" className="text-blue-600 hover:text-blue-800"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      </div>

      <MyFooter />
    </div>
  );
};

export default AboutUs;
