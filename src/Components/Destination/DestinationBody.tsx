// import { Link } from 'react-router-dom';
import dataJson from '../data.json';
import { useState } from 'react';

interface Image {
  png: string;
  webp: string;
}

interface Destination {
  name: string;
  images: Image;
  description: string;
  distance: string;
  travel: string;
}

interface CrewMember {
  name: string;
  images: Image;
  role: string;
  bio: string;
}

interface Technology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

interface Data {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
}

type Digit = number;

export const data: Data = dataJson;

const DestinationBody = () => {
  const [step, setStep] = useState<Digit>(0);
  const destinationData = data.destinations[step];

  const handleUpdateDestinations = (num: number) => {
    setStep(num);
  };

  return (
    <main className=" bg-[url('/assets/destination/background-destination-mobile.jpg')]  bg-cover bg-fixed h-screen overflow-y-scroll scroll-smooth">
      <section className="mx-7 translate-y-[8rem] mb-[-10rem]">
        <article className="flex flex-col items-center justify-center gap-[3rem]">
          <h1 className="text-[16px] uppercase tracking-[2px] flex gap-3 items-center justify-center ">
            <span className=" opacity-35">01</span> Pick your Destinations
          </h1>

          <div className="flex flex-col items-center gap-[2rem]">
            <figure>
              <img
                src={destinationData.images.png}
                alt={'item.description'}
                className="h-[170px]  animate-up-down "
              />
            </figure>
            <ul className="flex gap-[1.5rem] tracking-[2.1px] item-center justify-center">
              {data.destinations.map((destination, index) => (
                <li
                  onClick={() => handleUpdateDestinations(index)}
                  className={`text-center pb-[2px] ${
                    step === index
                      ? 'border-b-[2px] border-b-[#fff] transition-all duration-150'
                      : null
                  }`}
                  key={destination.name}
                >
                  {destination.name}
                </li>
              ))}
            </ul>
            <div>
              <div className="flex items-center justify-center flex-col ">
                <h1 className="text-[56px] uppercase font-[Bellefair] ">
                  {destinationData.name}
                </h1>
                <p className="text-center text-[15px]">
                  {destinationData.description}
                </p>
              </div>
            </div>
            <div className="h-[1px] w-[20rem] bg-[#fff] opacity-15"></div>
            <div className="flex flex-col items-center justify-center gap-[2rem]">
              <span className="text-center">
                <h2 className="uppercase tracking-[2px] ">Avg. distance</h2>
                <h1 className="text-[28px] font-[Bellefair] uppercase">
                  {destinationData.distance}
                </h1>
              </span>
              <span className="text-center">
                <h2 className="uppercase tracking-[2px] ">
                  Est. travel timece
                </h2>
                <h1 className="text-[28px] font-[Bellefair] uppercase">
                  {destinationData.travel}
                </h1>
              </span>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default DestinationBody;
