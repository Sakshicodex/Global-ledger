import React, { useEffect, useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from '../assets/logo.png'; // Ensure the path to your logo is correct

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
        setIsMenuOpen(false);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let navItems = [
    { link: "Home", path: "/", type: "route" },
    { link: "About Us", path: "/about-us", type: "route" }, // Added leading slash
    { link: "Blog", path: "about", type: "scroll" },
    { link: "Pricing", path: "/pricing", type: "route" },
    { link: "Contact", path: "/contact-us", type: "route" }, // Added leading slash
  ];
  
  if (currentPath === "/pricing") {
    navItems = navItems.filter(item => ["Home", "Pricing","About Us", "Contact"].includes(item.link));
  }
  if (currentPath === "/about-us") {
    navItems = navItems.filter(item => ["Home", "Pricing","About Us", "Contact"].includes(item.link));
  }
  if (currentPath === "/contact-us") {
    navItems = navItems.filter(item => ["Home", "Pricing","About Us", "Contact"].includes(item.link));
  }
  

  return (
    <header className="bg-white md:bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 right-0 left-0 border bg-white shadow-md transition-all duration-300" : ""}`}>
        <div className="flex justify-between items-center">
          <RouterLink to="/" className="text-5xl font-semibold flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-28 inline-block" />
          </RouterLink>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path, type }) =>
              type === "scroll" ? (
                <li key={link}>
                  <ScrollLink to={path} spy={true} smooth={true} offset={-100} className={`block text-base text-gray-900 hover:text-brandPrimary ${link === "Pricing" && currentPath === "/pricing" ? "font-bold" : "font-medium"}`}>
                    {link}
                  </ScrollLink>
                </li>
              ) : (
                <li key={link}>
                  <RouterLink to={path} className={`block text-base text-gray-900 hover:text-brandPrimary ${link === "Pricing" && currentPath === "/pricing" ? "font-bold" : "font-medium"}`}>
                    {link}
                  </RouterLink>
                </li>
              )
            )}
          </ul>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
              {isMenuOpen ? <FaXmark className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} fixed inset-0 top-16 bg-white p-4 shadow-lg`}>
          <ul className="space-y-4">
            {navItems.map(({ link, path, type }) =>
              type === "scroll" ? (
                <li key={link}>
                  <ScrollLink to={path} spy={true} smooth={true} offset={-100} className={`block text-base text-gray-900 hover:text-brandPrimary ${link === "Pricing" && currentPath === "/pricing" ? "font-bold" : "font-medium"}`}>
                    {link}
                  </ScrollLink>
                </li>
              ) : (
                <li key={link}>
                  <RouterLink to={path} className={`block text-base text-gray-900 hover:text-brandPrimary ${link === "Pricing" && currentPath === "/pricing" ? "font-bold" : "font-medium"}`}>
                    {link}
                  </RouterLink>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
