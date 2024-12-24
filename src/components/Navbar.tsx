import React, { useState } from 'react';
import Logo from "../assets/logo.png"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <header className="bg-white lg:fixed lg:h-full" style={{ zIndex: 10 }}>
      <nav className="flex md:flex-col justify-between items-center mx-auto">
      <div className="flex justify-center gap-2 md:justify-start py-5">
            <a href="#" className="flex items-center gap-2 text-2xl font-satoshi">
              <img src={Logo} alt="CodeAnt" className="h-6 w-6 mr-2" />
              CodeAnt AI
            </a>
          </div>

        <div
          className={`nav-links duration-500 ${
            isMenuOpen ? 'top-[9%]' : 'top-[-100%]'
          } md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5`}
        style={{zIndex:10}}>
          <ul className="flex flex-col w-full items-start md:gap-[2] gap-5">
            <li className="w-full">
            <Select defaultValue="light">
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" className="truncate" />
            </SelectTrigger>
            <SelectContent className="w-full">
                <SelectItem value="light" className="truncate">
                UtkarshDhairyaPanwar
                </SelectItem>
                <SelectItem value="dark" className="truncate">RuchitaDalvi</SelectItem>
                <SelectItem value="system" className="truncate">System</SelectItem>
            </SelectContent>
            </Select>
            </li>
            <li className='lg:bg-[#1570EF] w-full lg:rounded-lg lg:text-white lg:py-2 pl-1'>
  <a className="hover:text-gray-500 text-sm" href="#">
    <div className="flex flex-row gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house">
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      </svg>
      Repositories
    </div>
  </a>
</li>
<li>
  <a className="hover:text-gray-500 text-sm" href="#">
    <div className='flex flex-row gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code-xml">
        <path d="m18 16 4-4-4-4"/>
        <path d="m6 8-4 4 4 4"/>
        <path d="m14.5 4-5 16"/>
      </svg>
      AI Code Review
    </div>
  </a>
</li>
<li>
  <a className="hover:text-gray-500 text-sm" href="#">
    <div className='flex flex-row gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cloud">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
      Cloud Security
    </div>
  </a>
</li>
<li>
  <a className="hover:text-gray-500 text-sm" href="#">
    <div className='flex flex-row gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-text">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>
        <path d="M8 11h8"/>
        <path d="M8 7h6"/>
      </svg>
      How to Use
    </div>
  </a>
</li>
<li>
  <a className="hover:text-gray-500 text-sm" href="#">
    <div className='flex flex-row gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
      Settings
    </div>
  </a>
</li>
<div className="flex items-center gap-6 md:absolute md:bottom-16 md:w-full">
    <a className="hover:text-gray-500 text-sm" href="#">
      <div className="flex flex-row gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Support
      </div>
    </a>
  </div>
  <div className="flex items-center gap-6 md:absolute md:bottom-7 md:w-full">
    <a className="hover:text-gray-500 text-sm" href="#">
      <div className="flex flex-row gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
        Logout
      </div>
    </a>
  </div>
          </ul>
        </div>
        

        <div className="flex items-center gap-6">
          
          <div
            className="text-3xl cursor-pointer md:hidden"
            onClick={handleToggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
