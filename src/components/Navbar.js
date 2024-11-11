'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../lib/firebaseconfig'; // Import Firebase auth

const Navbar = () => {
  const [user, setUser] = useState(null); 
  const [isLoading, setIsLoading] = useState(false); 
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); 
      setIsLoading(false); 
    });

    return () => unsubscribe(); 
  }, []);

  const handleLogin = () => {
    if (!isLoading) {
      router.push('/authenticate');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      setUser(null); 
      router.push('/'); 
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  const handleHomeClick = () => {
    if (!isLoading) {
      router.push('/'); 
    }
  };

  const handleSectionScroll = (sectionId) => {
    const isHomePage = router.pathname === '/';

    if (isHomePage) {
      // Directly scroll to the section if already on the home page
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and scroll after loading
      router.push('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }
      }, 500); // Delay to ensure the page has loaded before scrolling
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // You might want to replace this with a loading spinner or animation.
  }

  return (
    <section className="w-full px-8 sticky top-0 z-50 text-[#1E2D3D] bg-[#FFFFFF] bg-opacity-50 backdrop-blur-md">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a 
            href="#_" 
            onClick={handleHomeClick}
            className="flex items-center mb-5 font-medium text-[#1E2D3D] lg:w-auto lg:items-center lg:justify-center md:mb-0 cursor-pointer"
          >
            <span className="mx-auto text-xl font-black leading-none text-[#1E2D3D] select-none">OCD<span className="text-[#3ABEFF]">.</span></span>
          </a>

          <nav className="flex flex-wrap items-center md:ml-8">
            {/* Removed Assessments Link */}
          </nav>
        </div>

        <div className='flex flex-col md:flex-row items-center md:space-x-8'>
          <nav className="flex flex-wrap items-center mb-5 text-base md:text-right md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-[#F2F4F7]">
            <a 
              onClick={handleHomeClick} 
              className="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#006D77] cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => handleSectionScroll('about')} // Smooth scroll to About section
              className="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#006D77] cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => handleSectionScroll('faqs')} // Smooth scroll to FAQs section
              className="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#006D77] cursor-pointer"
            >
              FaQs
            </a>
            <a 
              onClick={() => router.push('/resources')}
              className="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#006D77] cursor-pointer"
            >
              Resources
            </a>
          </nav>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          {user ? (
            <a 
              onClick={handleLogout} 
              className="text-base font-medium leading-6 text-[#FFFFFF] bg-[#006D77] hover:bg-[#004F57] px-5 py-2 rounded-lg transition duration-150 ease-in-out cursor-pointer"
            >
              Log Out
            </a>
          ) : (
            <a 
              onClick={handleLogin} 
              className="text-base font-medium leading-6 text-[#FFFFFF] bg-[#3ABEFF] hover:bg-[#1E90FF] px-5 py-2 rounded-lg transition duration-150 ease-in-out cursor-pointer"
            >
              Log In
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
