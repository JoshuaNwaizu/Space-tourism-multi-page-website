import dataJson from '/home/joshua-nwaizu/Documents/Space Tourism multi-page/src/data.json';
// import { useState } from 'react';

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

const data: Data = dataJson;

const destinationData = data.destinations[1];

const DestinationMars = () => {
  return (
    <main className=" bg-[url('/assets/destination/background-destination-mobile.jpg')]  bg-cover bg-fixed h-screen overflow-y-scroll">
      <section className="mx-7 translate-y-[8rem] pb-[3rem]">
        <article className="flex flex-col items-center justify-center gap-[3rem]">
          <h1 className="text-[16px] uppercase tracking-[2px] flex gap-6">
            <span className=" opacity-25">01</span> Pick your Destination
          </h1>

          <div className="flex flex-col items-center gap-[2rem]">
            <figure>
              <img
                src={destinationData.images.png}
                alt={'item.description'}
                className="h-[170px]"
              />
            </figure>
            <ul className="flex gap-[1.5rem] tracking-[2.1px] item-center justify-center">
              {data.destinations.map((destination) => (
                <li className="">{destination.name}</li>
              ))}
            </ul>

            <div className="flex items-center justify-center flex-col">
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
              <h2 className="uppercase tracking-[2px] ">Est. travel timece</h2>
              <h1 className="text-[28px] font-[Bellefair] uppercase">
                {destinationData.travel}
              </h1>
            </span>
          </div>
        </article>
      </section>
    </main>
  );
};

export default DestinationMars;
