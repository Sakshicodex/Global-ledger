import React from "react";
import { Footer } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons';
import { BsInstagram, BsGithub, BsFacebook } from "react-icons/bs";
import logo from "../assets/logo.png";

const MyFooter = () => {
  return (
    <footer className="bg-neutralBlack text-white">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-12">
        <div className="grid w-full justify-between gap-8 sm:flex sm:items-start sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-2">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              
            </a>
            <div className="my-8">
              <p className="mb-1"> Copyright © 2024 Global Ledger Automation Private Ltd.</p>
              <p>All rights reserved</p>
            </div>

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-start text-white">
            <a href="https://www.linkedin.com/company/glapl/" className="text-white"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://twitter.com/global_ledger?s=11" className="text-white"><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="https://www.instagram.com/globalledger?igsh=MTc2YXRhb3IxYmdmYQ%3D%3D&utm_source=qr" className="text-white"><FontAwesomeIcon icon={faInstagram} /></a>

              {/* React Icons usage remains the same */}
             
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-8 items-start sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
            <div>
              <Footer.Title title="Company" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about-us" className="text-white">
                  About us
                </Footer.Link>
               
                <Footer.Link href="/contact-us" className="text-white">
                  Contact us
                </Footer.Link>
                <Footer.Link href="/pricing" className="text-white">
                  Pricing
                </Footer.Link>
                
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Support" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="/contact-us" className="text-white">
                  Help center
                </Footer.Link>
                <Footer.Link href="/contact-us" className="text-white">
                  Terms of service
                </Footer.Link>
                <Footer.Link href="/contact-us" className="text-white">
                  Legal
                </Footer.Link>
                <Footer.Link href="/contact-us" className="text-white">
                  Privacy policy
                </Footer.Link>
                <Footer.Link href="/contact-us" className="text-white">
                  Status
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
            
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
