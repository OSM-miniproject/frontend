'use client';
import { useState } from 'react';
import "../globals.css"
const AuthForm = ({ 
  showSignUpOverlay = true, 
  showSignInOverlay = true,
  customFont = 'Poppins'
}) => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [isMobileSignUp, setIsMobileSignUp] = useState(false);

  return (
    <>
      {/* Custom Font Import */}
      <link
        href={`https://fonts.googleapis.com/css2?family=${customFont.replace(' ', '+')}:wght@400;600;700&display=swap`}
        rel="stylesheet"
      />
      
      <div className={`min-h-screen flex flex-col items-center justify-center bg-[#f6f5f7] px-4 font-[${customFont}]`}>
        {/* Mobile Toggle Button (visible only on small screens) */}
        <button 
          className="md:hidden mb-4 rounded-[20px] border border-[#FF4B2B] bg-[#FF4B2B] text-white text-xs font-bold py-3 px-11 uppercase tracking-wider transition-transform duration-80 ease-in hover:opacity-90"
          onClick={() => setIsMobileSignUp(!isMobileSignUp)}
        >
          Switch to {isMobileSignUp ? 'Sign In' : 'Sign Up'}
        </button>

        <div 
          className={`bg-white rounded-[10px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] 
          relative overflow-hidden w-full max-w-[768px] min-h-[480px] 
          ${isRightPanelActive ? 'right-panel-active' : ''}`}
        >
          {/* Sign Up Container */}
          <div className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-full md:w-1/2 
            ${isRightPanelActive || isMobileSignUp ? 'opacity-100 z-5 translate-x-0 md:translate-x-full' : 'opacity-0 -z-1'}`}>
            <form className="bg-white flex items-center justify-center flex-col px-6 md:px-12 h-full text-center">
              <h1 className="font-bold text-2xl mb-4">Create Account</h1>
              <div className="my-5 flex gap-4">
                <a href="#" className="border border-[#DDDDDD] rounded-full inline-flex justify-center items-center h-10 w-10 hover:bg-gray-50 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="border border-[#DDDDDD] rounded-full inline-flex justify-center items-center h-10 w-10 hover:bg-gray-50 transition-colors">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="border border-[#DDDDDD] rounded-full inline-flex justify-center items-center h-10 w-10 hover:bg-gray-50 transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span className="text-xs mb-4">or use your email for registration</span>
              <input type="text" placeholder="Name" className="bg-[#eee] border-none rounded-lg p-3 my-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FF4B2B] focus:ring-opacity-50" />
              <input type="email" placeholder="Email" className="bg-[#eee] border-none rounded-lg p-3 my-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FF4B2B] focus:ring-opacity-50" />
              <input type="password" placeholder="Password" className="bg-[#eee] border-none rounded-lg p-3 my-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FF4B2B] focus:ring-opacity-50" />
              <button className="mt-4 rounded-[20px] border border-[#FF4B2B] bg-[#FF4B2B] text-white text-xs font-bold py-3 px-11 uppercase tracking-wider transition-all duration-200 ease-in hover:opacity-90 active:scale-95">
                Sign Up
              </button>
            </form>
          </div>

          {/* Sign In Container */}
          <div className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-full md:w-1/2 
            ${isRightPanelActive || isMobileSignUp ? 'opacity-0 -z-1 md:translate-x-full' : 'opacity-100 z-5'}`}>
            <form className="bg-white flex items-center justify-center flex-col px-6 md:px-12 h-full text-center">
              <h1 className="font-bold text-2xl mb-4">Sign in</h1>
              <div className="my-5 flex gap-4">
                <a href="#" className="border border-[#DDDDDD] rounded-full inline-flex justify-center items-center h-10 w-10 hover:bg-gray-50 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="border border-[#DDDDDD] rounded-full inline-flex justify-center items-center h-10 w-10 hover:bg-gray-50 transition-colors">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="border border-[#DDDDDD] rounded-full inline-flex justify-center items-center h-10 w-10 hover:bg-gray-50 transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span className="text-xs mb-4">or use your account</span>
              <input type="email" placeholder="Email" className="bg-[#eee] border-none rounded-lg p-3 my-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FF4B2B] focus:ring-opacity-50" />
              <input type="password" placeholder="Password" className="bg-[#eee] border-none rounded-lg p-3 my-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FF4B2B] focus:ring-opacity-50" />
              <a href="#" className="text-sm text-[#333] no-underline my-4 hover:text-[#FF4B2B] transition-colors">Forgot your password?</a>
              <button className="rounded-[20px] border border-[#FF4B2B] bg-[#FF4B2B] text-white text-xs font-bold py-3 px-11 uppercase tracking-wider transition-all duration-200 ease-in hover:opacity-90 active:scale-95">
                Sign In
              </button>
            </form>
          </div>

          {/* Overlay Container - Hidden on Mobile */}
          <div className={`hidden md:block absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-100
            ${isRightPanelActive ? '-translate-x-full' : ''}`}>
            <div className={`bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] text-white relative -left-full h-full w-[200%] transform transition-transform duration-600 ease-in-out
              ${isRightPanelActive ? 'translate-x-1/2' : 'translate-x-0'}`}>
              
              {/* Overlay Left - Shown based on prop */}
              {showSignInOverlay && (
                <div className={`absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 -translate-x-[20%] transition-transform duration-600 ease-in-out
                  ${isRightPanelActive ? 'translate-x-0' : ''}`}>
                  <h1 className="font-bold text-3xl mb-4">Welcome Back!</h1>
                  <p className="text-sm font-light leading-5 tracking-wider my-5">
                    To keep connected with us please login with your personal info
                  </p>
                  <button 
                    className="rounded-[20px] border border-white bg-transparent text-white text-xs font-bold py-3 px-11 uppercase tracking-wider transition-all duration-200 ease-in hover:bg-white hover:text-[#FF4B2B] active:scale-95"
                    onClick={() => setIsRightPanelActive(false)}
                  >
                    Sign In
                  </button>
                </div>
              )}

              {/* Overlay Right - Shown based on prop */}
              {showSignUpOverlay && (
                <div className={`absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 right-0 transition-transform duration-600 ease-in-out
                  ${isRightPanelActive ? 'translate-x-[20%]' : 'translate-x-0'}`}>
                  <h1 className="font-bold text-3xl mb-4">Hello, Friend!</h1>
                  <p className="text-sm font-light leading-5 tracking-wider my-5">
                    Enter your personal details and start journey with us
                  </p>
                  <button 
                    className="rounded-[20px] border border-white bg-transparent text-white text-xs font-bold py-3 px-11 uppercase tracking-wider transition-all duration-200 ease-in hover:bg-white hover:text-[#FF4B2B] active:scale-95"
                    onClick={() => setIsRightPanelActive(true)}
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;