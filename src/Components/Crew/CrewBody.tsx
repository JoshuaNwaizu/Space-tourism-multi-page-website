import { useState } from 'react';
import { data } from '../Destination/DestinationBody';

type Digit = number;

const CrewBody = () => {
  const [isPagination, setIsPagination] = useState<Digit>(0);

  const crewData = data.crew[isPagination];
  const pagination = Array(4).fill(null);

  const handlePaginations = (num: Digit): void => {
    setIsPagination(num);
  };

  return (
    <main className="bg-[url('/assets/crew/background-crew-mobile.jpg')]  bg-cover bg-fixed h-screen overflow-y-scroll scroll-smooth">
      <section className="mx-7 translate-y-[8rem]">
        <article className="flex flex-col items-center gap-[4rem]">
          <h1 className="text-[16px] tracking-[2px] flex gap-3 items-center justify-center">
            <span className="opacity-35">02</span>MEET YOUR CREW
          </h1>

          <span className="flex flex-col items-center gap-4">
            <span className="flex items-center flex-col">
              <h2 className="text-[20px] opacity-50 uppercase  font-[Bellefair]">
                {crewData.role}{' '}
              </h2>
              <h1 className="text-[26px] uppercase  font-[Bellefair]">
                {crewData.name}
              </h1>
            </span>

            <p className="text-center text-[15px] leading-7">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </span>

          <div className="flex items-center flex-col justify-center gap-9">
            <div className="flex flex-row gap-7  ">
              {pagination.map((_, i) => (
                <div
                  key={i}
                  className={` h-[12px] w-[12px] mb-3 flex rounded-full  ${
                    isPagination === i ? 'bg-white' : 'bg-slate-600'
                  }`}
                  onClick={() => handlePaginations(i)}
                ></div>
              ))}
            </div>
            <figure className=" py-2 border-none rounded-full backdrop-blur-[2px] flex items-center justify-center w-[290px] h-[340px] shadow-blue-300 ">
              <img
                src={crewData.images.png}
                alt={crewData.name}
                className=" w-[274px] h-[340px] backdrop-blur-[2px] flex-shrink-0 shadow-blue-300"
              />
            </figure>
            {/* <div className="w-[150px] h-[30px] bg-[#030312] blur-[15px] absolute left-[4.5rem] right-0 bottom-[-.75rem]"></div> */}
          </div>
        </article>
      </section>
    </main>
  );
};

export default CrewBody;
