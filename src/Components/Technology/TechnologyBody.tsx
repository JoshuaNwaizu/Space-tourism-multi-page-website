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
    <main className="bg-[url('/assets/technology/background-technology-mobile.jpg')]  bg-cover bg-fixed h-screen overflow-y-scroll scroll-smooth ">
      <section className=" translate-y-[8rem] mb-[10rem] ">
        <article className="flex flex-col items-center justify-center gap-[5rem]">
          <h1 className="text-[16px] tracking-[2px] flex  gap-3">
            <span className="opacity-35">03</span>SPACE LAUNCH 101
          </h1>

          <div className="flex flex-col items-center justify-center gap-[2rem]">
            <img
              src={techData.images.landscape}
              alt={techData.name}
              className="w-[477px] h-[230px]"
            />

            <div className="flex gap-[1rem] ">
              {numPag.map((_, i) => (
                <span
                  className={`flex w-[40px] h-[40px] border-2 items-center justify-center rounded-full ${
                    isPag === i ? 'bg-[#fff] text-[#0B0D17]' : ''
                  } `}
                  onClick={() => handlePaginations(i)}
                >
                  {i + 1}
                </span>
              ))}
            </div>
            <div className="mx-7 flex items-center justify-center flex-col text-center gap-4">
              <h2 className="font-[Bellefair] text-[18px] opacity-50">
                THE TERMINOLOGY…
              </h2>
              <h1 className="font-[Bellefair] text-[24px] uppercase">
                {techData.name}
              </h1>
              <p className=" leading-7">{techData.description}</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default TechnologyBody;
