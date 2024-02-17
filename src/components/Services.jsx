import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import gusto from '../assets/gusto.svg';
import quickbooks from '../assets/quickbooks.svg';
import bill from '../assets/bill.svg';
import xero from '../assets/xero.png'
import razorpay from '../assets/razorpay.png'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Secure",
      decription:
        "We strictly only deal with vendors that provide top notch security.",
      image: "/src/assets/s1.png",
    },
    {
      id: 2,
      title: "Cloud Based Accounting",
      decription:
        "Utilize leading accounting software tailored to your needs for seamless financial management.",
      image: "/src/assets/s2.png",
    },
    {
      id: 3,
      title: "Data Analysis",
      decription:
        "Empower your decision-making with comprehensive data analysis and actionable insights.",
      image: "/src/assets/s3.png",
    },
    
    
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        
        
        <div className="my-12 flex flex-wrap justify-between items-center gap-8 ">
          <img src={gusto} alt="" />
          <img src={quickbooks} alt="" />
          <img src={bill} alt="" />
          <img src={xero} alt="" />
          <img src={razorpay} alt="" />
        
        </div>
      </motion.div>

      {/* service cards */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-20 text-center md:w-1/2 mx-auto"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
        We have Amazing Service.
        </h2>
        <p className="text-neutralGrey">
        We are your bookkeepers, your accountant, your consultants, your partners. Whatever you need from us, we are just a click away.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
      >
        {services.map((service) => (
  <div
    key={service.id}
    className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex flex-col items-center justify-center h-full"
  >
    <div className="flex justify-center items-center w-full">
      <div className="w-14 h-14 mx-auto mb-4 flex justify-center items-center rounded-tl-3xl rounded-br-3xl">
        <img src={service.image} alt="" className="block" />
      </div>
    </div>
    <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
      {service.title}
    </h4>
    <p className="text-sm text-neutralGrey">{service.decription}</p>
  </div>
))}

      </motion.div>
    </div>
  );
};

export default Services;
