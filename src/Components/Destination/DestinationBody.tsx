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
    <main className=" bg-[url('/assets/destination/background-destination-mobile.jpg')]  bg-cover bg-fixed h-[60rem] min-[768px]:bg-[url('/assets/destination/background-destination-tablet.jpg')]  min-[1100px]:h-screen  min-[1100px]:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
      <section className="mx-7 translate-y-[8rem] mb-[-10rem] flex flex-col gap-[3rem] min-[1100px]:translate-y-[10rem]  min-[1100px]:justify-center">
        <h1 className="text-[16px] uppercase tracking-[2px] flex gap-3 items-center justify-center  min-[768px]:items-start min-[768px]:justify-start min-[768px]:text-[20px] min-[1100px]:ml-[9rem] min-[1300px]:ml-[18rem] min-[1100px]:text-[20px]">
          <span className=" opacity-35">01</span> Pick your Destinations
        </h1>
        <article className="flex flex-col items-center justify-center gap-[3rem]">
          <div className="flex flex-col items-center gap-[2rem] min-[768px]:gap-[2rem] min-[1100px]:flex-row min-[1100px]:gap-[5rem]">
            <figure>
              <img
                src={destinationData.images.png}
                alt={'item.description'}
                className="h-[170px] animate-up-down min-[768px]:h-[277px]"
              />
            </figure>
            <div className="flex flex-col items-center justify-center gap-[2rem] min-[768px]:gap-[2rem] min-[768px]:items-center min-[768px]:justify-center">
              <ul className="flex gap-[1.5rem] tracking-[2.1px] item-center justify-center min-[768px]:gap-[2rem] min-[1100px]:translate-x-[-4.5rem]">
                {data.destinations.map((destination, index) => (
                  <li
                    onClick={() => handleUpdateDestinations(index)}
                    className={`text-center pb-[2px] cursor-pointer ${
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
                <div className="flex items-center justify-center flex-col  min-[1100px]:w-[20rem]">
                  <h1 className="text-[56px] uppercase font-[Bellefair] min-[1100px]:translate-x-[-6rem]">
                    {destinationData.name}
                  </h1>
                  <p className="text-center text-[15px] min-[768px]:mx-[8rem] min-[1100px]:mx-[4rem] min-[768px]:w-[30rem]  min-[1100px]:w-[25rem] min-[1100px]:text-left ">
                    {destinationData.description}
                  </p>
                </div>
              </div>
              <div className="h-[1px] w-[20rem] bg-[#fff] opacity-15 min-[768px]:w-[30rem] min-[1100px]:w-[25rem]"></div>
              <div className="flex flex-col items-center justify-center gap-[2rem] min-[768px]:flex-row min-[768px]:gap-[7rem]  min-[1100px]:items-start  min-[1100px]:justify-start">
                <span className="text-center  min-[1100px]:text-left">
                  <h2 className="uppercase tracking-[2px] ">Avg. distance</h2>
                  <h1 className="text-[28px] font-[Bellefair] uppercase">
                    {destinationData.distance}
                  </h1>
                </span>
                <span className="text-center  min-[1100px]:text-left">
                  <h2 className="uppercase tracking-[2px] ">
                    Est. travel timece
                  </h2>
                  <h1 className="text-[28px] font-[Bellefair] uppercase">
                    {destinationData.travel}
                  </h1>
                </span>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default DestinationBody;
