import CrewBody from './CrewBody';
import NavBar from '../../NavBar/NavBar';
import React from 'react';

interface NavItems {
  home: string;
  destination: string;
  crew: string;
  technology: string;
  image: string;
}

const CrewView: React.FC<NavItems> = () => {
  return (
    <>
      <NavBar
        home=""
        destination="destination"
        crew="crew"
        technology="technology"
        image="/assets/crew/background-crew-mobile.jpg"
        // border="crew"
      />
      <CrewBody />
    </>
  );
};

export default CrewView;
