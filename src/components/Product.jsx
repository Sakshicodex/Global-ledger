import React from "react";
import aboutImg from "../assets/mobile-login.png";
import Maecenas from '../assets/maecenas.png';
import first from "../assets/g6.svg";
import tax from "../assets/g7.svg";
import cfo from "../assets/g8.svg";


// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Product = () => {
  return (
    <div className="my-12" id="product">
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
             <img src={first} alt="" className="w-full md:w-3/4 lg:w-1/2" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Bookkeeping & Payroll
            </h2>
            <ul className="md:w-3/4 text-sm text-neutralGrey mb-8 list-disc list-inside">
              <li>Bank and credit card reconciliations</li>
              <li>Clear and accurate monthly financial statements</li>
              <li>Bill pay services</li>
              <li>Payroll processing and filings</li>
            </ul>
            
          </motion.div>
        </div>
      </div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={cfo} alt="" className="w-full md:w-3/4 lg:w-1/2" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              CFO Services
            </h2>
            <ul className="md:w-3/4 text-sm text-neutralGrey mb-8 list-disc list-inside">
              <li>The expert finance support you need, when you need it.</li>
              <li>Bi-weekly meetings with your virtual CFO</li>
              <li>Fully outsourced accounting department</li>
              <li>Custom financial reporting</li>
              <li>A fraction of the cost of hiring internally</li>
            </ul>

          </motion.div>
        </div>
      </div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={tax} alt="" className="w-full md:w-3/4 lg:w-1/2" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Tax Services
            </h2>
            <ul className="md:w-3/4 text-sm text-neutralGrey mb-8 list-disc list-inside">
              
              <li>Real CPAs</li>
              <li>Strategic tax planning</li>
              <li>Business tax return filings</li>
              <li>Personal tax return filings</li>
            </ul>
            
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      
    </div>
  );
};

export default Product;
