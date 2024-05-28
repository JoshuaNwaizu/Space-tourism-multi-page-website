import CrewBody from './CrewBody';
// import CrewNav from './CrewNav';
import NavBar from '../../NavBar/NavBar';
import React from 'react';

interface NavItems {
  home: string;
  destination: string;
  crew: string;
  technology: string;
  image: string;
  // routings: string;
}

const CrewView: React.FC<NavItems> = () => {
  return (
    <>
      {/* <CrewNav /> */}
      <NavBar
        home=""
        destination="destination"
        crew="crew"
        technology="technology"
        image="/assets/crew/background-crew-mobile.jpg"
      />
      <CrewBody />
    </>
  );
};

export default CrewView;
