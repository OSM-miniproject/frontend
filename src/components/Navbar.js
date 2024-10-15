'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for Next.js router

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false); // Ensures the component is mounted on the client side

  // Directly use useRouter in the component body
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true); // Set mounted flag to true once the component is mounted
  }, []);

  const handleLogin = () => {
    if (isMounted) {
      router.push('/authenticate?page=login'); // Redirect to login page
    }
  };

  const handleSignup = () => {
    if (isMounted) {
      router.push('/authenticate?page=signup'); // Redirect to signup page
    }
  };

  const handleHomeClick = () => {
    if (isMounted) {
      router.push('/'); // Redirect to homepage
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFaqClick = (e) => {
    e.preventDefault();
    const faqsSection = document.getElementById('faqs');
    if (faqsSection) {
      faqsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isMounted) {
    return null; // Don't render anything until mounted (on client side)
  }

  return (
    <section className="w-full px-8 sticky top-0 z-50 text-[#1E2D3D] bg-[#FFFFFF]">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a 
            href="#_" 
            onClick={handleHomeClick} // Add the click handler for the "Home" link
            className="flex items-center mb-5 font-medium text-[#1E2D3D] lg:w-auto lg:items-center lg:justify-center md:mb-0 cursor-pointer"
          >
            <span className="mx-auto text-xl font-black leading-none text-[#1E2D3D] select-none">OCD<span className="text-[#3ABEFF]">.</span></span>
          </a>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-[#F2F4F7]">
            <a 
              onClick={handleHomeClick} // Add the click handler for "Home"
              className="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#006D77] cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about" 
              onClick={handleAboutClick} // Add scroll handler for About
              className="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#006D77] cursor-pointer"
            >
              About
            </a>
            <a
              href="#faqs" 
              onClick={handleFaqClick} // Add scroll handler for FaQs
              className="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#006D77] cursor-pointer"
            >
              FaQs
            </a>
            <a href="#_" className="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#006D77]">Resources</a>
          </nav>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <a onClick={handleLogin} className="text-base font-medium leading-6 text-[#1E2D3D] whitespace-no-wrap transition duration-150 ease-in-out hover:text-[#006D77] cursor-pointer">
            Log in
          </a>
          <a onClick={handleSignup} className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#FF7D3D] border border-transparent rounded-md shadow-sm hover:bg-[#006D77] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF7D3D] cursor-pointer">
            Sign up
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
