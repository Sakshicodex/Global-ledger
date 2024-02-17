import React from "react";
import aboutImg from "../assets/33.png";
import mobi from "../assets/33.png";
import affordable from '../assets/Affordable.png'
import p2 from '../assets/p2.png'

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";


const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
  <div className="md:w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
    >
      <img src={mobi} alt="" className="w-80 lg:w-96 xl:w-1/2" />
    </motion.div>
    <motion.div
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }}
      className="text-center md:text-left">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-neutralDGrey font-semibold mb-4">
        Expert Accounting Services for Your Business.
      </h2>
      <p className="text-sm md:text-base lg:text-lg text-neutralGrey mb-8">
        At Global Ledger, we provide comprehensive accounting solutions tailored to your business needs. Enhance your financial operations with our expert support.
        Get accounting support from the experts at Global Ledger.

        Team comprised of Professionally Qualified Accountants across geographies.

        Country-specific formats and suitably fitting selection of software.

        Maintaining continuity with backup resources without any disruption.
        Cost Reduction.
      </p>
      
    </motion.div>
  </div>
</div>


      {/* company stats */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 md:w-2/3">
            We Always Abide by <br /> <span className="text-brandPrimary">Our Principles.</span>
            </h2>
            <p>Empower Your Growth, Entrust Your Numbers to Global Ledgers.

</p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={affordable} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">Affordable</h4>
                  <p>We promise to offer you the best rate we can - at par with the industry standard.</p>
                </div>
              </div>
              
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={p2} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">Professionalism</h4>
                  <p>We assure you that our accountants are just made for your service.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default About;
