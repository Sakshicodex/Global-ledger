import React from "react";
import { Carousel } from "flowbite-react";
import banner from "../assets/g1.svg";
import banner2 from "../assets/g2.svg";
import g1 from "../assets/g3.svg";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          {/* Carousel item 1 */}
          <div className="py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-4 md:gap-12">
            <div>
              <img src={banner} alt="Grow your enterprise, we'll balance the books" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl mb-4 font-semibold text-neutralDGrey leading-snug">
                Grow your enterprise, we'll <span className="text-brandPrimary">balance the books.</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                Contact Us
              </button>
            </div>
          </div>
          {/* Carousel item 2 */}
          <div className="py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-4 md:gap-12">
            <div>
              <img src={banner2} alt="Hire Professional Accountant" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl mb-4 font-semibold text-neutralDGrey leading-snug">
                Hire Professional <span className="text-brandPrimary">Accountant.</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                Contact Us
              </button>
            </div>
          </div>
          {/* Carousel item 3 */}
          <div className="py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-4 md:gap-12">
            <div>
              <img src={g1} alt="Service beyond borders" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl mb-4 font-semibold text-neutralDGrey leading-snug">
                Service beyond <span className="text-brandPrimary">borders.</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                Contact Us
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
