// import React from 'react'
import { useState, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
// import { data } from '../Components/Destination/DestinationBody';

type Open = boolean;
type Nav = number;
interface NavItems {
  home: string;
  destination: string;
  crew: string;
  technology: string;
  image: string;
}

interface NavigationItem {
  label: string;
  path: string | null;
}

const NavBar: React.FC<NavItems> = ({
  home,
  destination,
  crew,
  technology,
  image,
}) => {
  const [isOpen, setIsOpen] = useState<Open>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navPag, setNavPag] = useState<Nav>(0);

  const handleNavPag = (num: Nav) => {
    setNavPag(num);
    setIsOpen(!isOpen);

    console.log(num);
  };

  const navList: NavigationItem[] = [
    { label: '00 Home', path: home },
    { label: '01 Destination', path: destination },
    { label: '02 Crew', path: crew },
    { label: '03 Technology', path: technology },
  ];

  const handleNavToggle = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY >= 30);
      setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <header
      className={`fixed top-0 w-full z-10 bg-fixed d bg-cover transition-all duration-30 min-[1100px]:top-[2rem] min-[1100px]:bg-none min-[1100px]:pb-5 `}
      style={{
        backgroundImage: `url( ${isScrolled && image} )`,
      }}
    >
      <nav className="flex items-center justify-between mx-6 h-[2.8rem] min-[1100px]:h-[3rem] max-[765px]:my-5  min-[768px]:mt-[1.25rem]  ">
        <span className="min-[1100px]:translate-x-11">
          <img
            src="/assets/shared/logo.svg"
            alt=" Space Logo"
          />
        </span>
        <span className="max-[1099px]:hidden w-[35%] h-[1px] bg-[white] translate-x-[5rem] z-10 opacity-25">
          {' '}
        </span>
        <div
          className={` max-[765px]:absolute max-[765px]:top-0 max-[765px]:backdrop-blur-[40px] max-[765px]: w-[70%] max-[765px]:h-screen max-[765px]:transition-all max-[765px]:duration-300  min-[768px]:py-[2rem] min-[768px]:-mr-6 min-[768px]:w-[85%] min-[768px]:flex min-[768px]:items-center min-[768px]:justify-center min-[768px]:bg-[#FFFFFF0C] min-[768px]:backdrop-blur-[40px] min-[1100px]:w-[60%] ${
            isOpen ? 'right-0 ' : 'right-[-100%]'
          } `}
        >
          <span
            className="text-[2.5rem] relative top-[2.1rem] left-[13rem] text-[rgb(208,214,249)] min-[768px]:hidden max-[320px]:left-[10rem]"
            onClick={handleNavToggle}
          >
            <IoCloseSharp />
          </span>
          <ul className="flex max-[765px]:flex-col max-[765px]:gap-8 max-[765px]:justify-center max-[765px]:translate-y-[8rem] max-[765px]:ml-[3rem] tracking-[2px] text-[#b1a3a3] min-[768px]:gap-[3rem]">
            {navList.map((item, i) => (
              <Link
                to={`/${item.path}`}
                key={item.label}
                onClick={() => handleNavPag(i)}
              >
                {' '}
                <li
                  className={`text-[#fff] text-[16px]${
                    navPag === 1 ? 'border-r-4 border-white' : ''
                  }`}
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <span
          className={`text-[2.5rem] min-[765px]:hidden text-[#D0D6F9] ${
            isOpen ? 'hidden' : null
          } `}
          onClick={handleNavToggle}
        >
          <HiMenu />
        </span>
      </nav>
    </header>
  );
};

export default NavBar;
