// import React from 'react'
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

type Open = boolean;
// interface NavItems {
//   name: string;
//   destination: string;
// }

// const navIitems: NavItems[] = [
//   {
//     name: '00 Home',
//     destination: '',
//   },
//   {
//     name: '01 Home',
//     destination: '',
//   },
//   {
//     name: '00 Home',
//     destination: '',
//   },
//   {
//     name: '00 Home',
//     destination: '',
//   },
// ];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<Open>(false);

  const handleNavToggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full z-10 ">
      <nav className="flex items-center justify-between mx-5 h-[4rem] mt-5">
        <span>
          <img
            src="/assets/images/shared/logo.svg"
            alt=" Space Logo"
          />
        </span>

        <div
          className={` absolute top-0 backdrop-blur-[40px]  w-[70%] h-screen transition-all duration-300  ${
            isOpen ? 'right-0 ' : 'right-[-100%]'
          } `}
        >
          <span
            className="text-[2.5rem] relative top-[2.1rem] left-[13rem] text-[#D0D6F9]"
            onClick={handleNavToggle}
          >
            <IoCloseSharp />
          </span>
          <ul className="flex flex-col gap-8 justify-center translate-y-[8rem] ml-[3rem] tracking-[2px] text-[#fff]">
            <Link to={'/'}>
              {' '}
              <li> 00 Home</li>
            </Link>

            <Link to={'destination'}>
              <li> 01 Destination</li>
            </Link>

            <li> 02 Crew</li>
            <li> 03 Technology</li>
          </ul>
        </div>

        <span
          className={`text-[2.5rem] text-[#D0D6F9] ${isOpen ? 'hidden' : null}`}
          onClick={handleNavToggle}
        >
          <HiMenu />
        </span>
      </nav>
    </header>
  );
};

export default NavBar;
