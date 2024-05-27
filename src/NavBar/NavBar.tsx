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
  index: number;
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
  index,
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
          ? ` bg-fixed d bg-cover shadow-lg transition-all duration-300`
          : ''
      } `}
      style={{
        backgroundColor: `${isScrolled ? 'red' : ''}`,
      }}
    >
      <nav className="flex items-center justify-between mx-5 h-[4rem] my-3">
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
            {navList.map((item, i) => (
              <Link
                to={`/${item.path}`}
                key={item.label}
                onClick={() => handleNavPag(i)}
              >
                {' '}
                <li
                  className={`${
                    navPag === index ? 'border-r-4 border-white' : ''
                  }`}
                >
                  {item.label}
                </li>
              </Link>
            ))}
            {/* <Link to={home}>
              {' '}
              <li> 00 Home</li>
            </Link>

            <Link to={`/${destination}`}>
              <li> 01 Destination</li>
            </Link>

            <Link to={`/${crew}`}>
              <li> 02 Crew</li>
            </Link>
            <Link to={`/${technology}`}>
              <li> 03 Technology</li>
            </Link> */}
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
