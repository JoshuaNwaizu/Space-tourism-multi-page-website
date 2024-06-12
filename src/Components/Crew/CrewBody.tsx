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
    <main className="bg-[url('/assets/crew/background-crew-mobile.jpg')]  bg-cover bg-fixed min-[768px]:h-[70rem] h-[55rem] min-[769px]:h-screen min-[768px]:bg-[url('/assets/crew/background-crew-tablet.jpg')] min-[1100px]:bg-[url('/assets/crew/background-crew-desktop.jpg')]">
      <section className="mx-7 translate-y-[8rem] mb-[-10rem] flex flex-col gap-[3rem] ">
        <h1 className="text-[16px] tracking-[2px] flex gap-3 items-center justify-center min-[768px]:justify-start min-[768px]:text-[20px] min-[1100px]:ml-[7rem] min-[1300px]:ml-[14rem]">
          <span className="opacity-35">02</span>MEET YOUR CREW
        </h1>
        <article className="flex flex-col items-center gap-[4rem] min-[1100px]:flex-row min-[1100px]:justify-center ">
          <div className="flex flex-col items-center gap-[4rem] min-[1100px]:items-start">
            <span className="flex flex-col items-center gap-4 min-[1100px]:items-start">
              <span className="flex items-center flex-col min-[1100px]:items-start">
                <h2 className="text-[20px] opacity-50 uppercase  font-[Bellefair] min-[768px]:text-[24px]">
                  {crewData.role}{' '}
                </h2>
                <h1 className="text-[26px] uppercase  font-[Bellefair] min-[768px]:text-[40px]">
                  {crewData.name}
                </h1>
              </span>

              <p className="text-center text-[15px] leading-7 min-[768px]:w-[30rem] min-[768px]:text-[16px] min-[1100px]:text-left">
                {crewData.bio}
              </p>
            </span>

            <div className="flex flex-col items-center justify-center gap-8 ">
              <div className="flex flex-row gap-4  min-[768px]:gap-[1.2rem]">
                {pagination.map((_, i) => (
                  <div
                    key={i}
                    className={` h-[12px] w-[12px] mb-3 flex rounded-full cursor-pointer ${
                      isPagination === i ? 'bg-white' : 'bg-slate-600'
                    }`}
                    onClick={() => handlePaginations(i)}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <figure className=" py-2 border-none rounded-full backdrop-blur-[2px] flex items-center justify-center  shadow-blue-300 self-stretch min-[1100px]:mt-[-2rem]">
            <span>
              <img
                src={crewData.images.png}
                alt={crewData.name}
                className=" w-[294px] h-[340px] backdrop-blur-[2px] flex-shrink-0 shadow-blue-300 min-[768px]:w-[420px] min-[768px]:h-[520px] min-[1100px]:h-[500px] min-[1100px]:w-[400px]"
              />
            </span>

            <div className=" w-[20rem] left-[2.5rem] min-[768px]:w-[30rem] h-[50px] bg-[#0B0D17] blur-[13px] absolute  min-[768px]:left-[7.5rem] right-0 bottom-[-1.5rem] min-[1100px]:left-[1rem] "></div>
          </figure>
        </article>
      </section>
    </main>
  );
};

export default CrewBody;
