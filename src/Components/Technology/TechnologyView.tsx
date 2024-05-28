import React from 'react';
import NavBar from '../../NavBar/NavBar';
import TechnologyBody from './TechnologyBody';

interface NavItems {
  home: string;
  destination: string;
  crew: string;
  technology: string;
  image: string;
}

const TechnologyView: React.FC<NavItems> = () => {
  return (
    <div>
      <NavBar
        home=""
        destination="destination"
        crew="crew"
        technology="technology"
        image="/assets/technology/background-technology-mobile.jpg"
      />
      <TechnologyBody />
    </div>
  );
};

export default TechnologyView;
