// import React from 'react';
import React from 'react';
import NavBar from '../../NavBar/NavBar';
import HomeBody from './HomeBody';
// import HomeNav from './HomeNav';

interface NavItems {
  home: string;
  destination: string;
  crew: string;
  technology: string;
  // routings: string;
}

const HomeView: React.FC<NavItems> = () => {
  return (
    <>
      {/* <HomeNav /> */}
      <NavBar
        home="/"
        destination="destination"
        crew="crew"
        technology="technology"
        index={0}
      />
      <HomeBody />
    </>
  );
};

export default HomeView;
