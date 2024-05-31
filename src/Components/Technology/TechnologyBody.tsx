import { useState } from 'react';
import { data } from '../Destination/DestinationBody';

type Digit = number;

const TechnologyBody = () => {
  const [isPag, setIsPag] = useState<Digit>(0);
  const techData = data.technology[isPag];
  const numPag = Array(3).fill(null);

  const handlePaginations = (num: Digit): void => {
    setIsPag(num);
  };
  return (
    <main className="bg-[url('/assets/technology/background-technology-mobile.jpg')]  bg-cover bg-fixed h-[55rem] min-[768px]:bg-[url('/assets/technology/background-technology-tablet.jpg')]  min-[1100px]:bg-[url('/assets/technology/background-technology-desktop.jpg')] min-[1100px]:h-screen">
      <section className=" translate-y-[8rem] mb-[-10rem] flex flex-col gap-[5rem]">
        <h1 className="text-[16px] tracking-[2px] flex  gap-3 items-center justify-center min-[768px]:justify-start min-[768px]:ml-[2rem] min-[1100px]:ml-[8rem] min-[1300px]:ml-[16rem] min-[768px]:text-[20px]">
          <span className="opacity-35">03</span>SPACE LAUNCH 101
        </h1>
        <article className="flex flex-col items-center justify-center gap-[5rem] ">
          <div className="flex flex-col items-center justify-center gap-[2rem] min-[1100px]:flex-row ">
            <img
              src={techData.images.landscape}
              alt={techData.name}
              className="w-[477px] h-[230px] min-[768px]:w-[768px] min-[768px]:h-[348px] min-[1100px]:order-1 min-[801px]:hidden"
            />
            <img
              src={techData.images.portrait}
              alt={techData.name}
              className="w-[477px] h-[230px] min-[768px]:w-[768px] min-[768px]:h-[348px] min-[1100px]:order-1 min-[1100px]:w-[400px] min-[1100px]:h-[450px] max-[768px]:hidden "
            />

            <div className="flex gap-[1rem] min-[1100px]:flex-col min-[1100px]:gap-[2rem]">
              {numPag.map((_, i) => (
                <span
                  className={`flex w-[40px] h-[40px] border-2 items-center justify-center rounded-full min-[768px]:h-[45px] min-[768px]:w-[45px] min-[1100px]:w-[50px] min-[1100px]:h-[50px] ${
                    isPag === i ? 'bg-[#fff] text-[#0B0D17]' : ''
                  } `}
                  onClick={() => handlePaginations(i)}
                >
                  {i + 1}
                </span>
              ))}
            </div>
            <div className="mx-7 flex items-center justify-center flex-col text-center gap-4 min-[1100px]:items-start min-[1100px]:text-left">
              <h2 className="font-[Bellefair] text-[18px] opacity-50 min-[768px]:text-[24px]">
                THE TERMINOLOGY…
              </h2>
              <h1 className="font-[Bellefair] text-[24px] uppercase min-[768px]:text-[40px]">
                {techData.name}
              </h1>
              <p className=" leading-7 min-[768px]:w-[28rem] min-[1100px]:w-[25rem]">
                {techData.description}
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default TechnologyBody;
