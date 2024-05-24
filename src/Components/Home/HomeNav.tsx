// import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';

interface NavigationItem {
  label: string;
  path: string;
}

const navList: NavigationItem[] = [
  { label: '00 Home', path: '' },
  { label: '01 Destination', path: '/destination' },
  { label: '02 Crew', path: '/crew' },
  { label: '03 Technology', path: '/technology' },
];

type Open = boolean;

const HomeNav = () => {
  const [isOpen, setIsOpen] = useState<Open>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavToggle = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY >= 50);
      setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);
  return (
    <header
      className={`fixed top-0 w-full z-10 ${
        isScrolled
          ? ` bg-[url('/assets/home/background-home-mobile.jpg')] bg-fixed d bg-cover shadow-lg transition-all duration-300`
          : ''
      }`}
    >
      <nav className="flex items-center justify-between mx-5 h-[4rem] mt-5">
        <span>
          <img
            src="/assets/shared/logo.svg"
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
            {navList.map((list) => (
              <>
                <Link
                  to={list.path}
                  key={list.label}
                >
                  <li>{list.label}</li>
                </Link>
              </>
            ))}
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

export default HomeNav;
