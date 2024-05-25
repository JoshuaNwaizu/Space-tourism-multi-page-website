import { data } from '../Destination/DestinationBody';

type Digit = number;

const CrewBody = () => {
  const crewData = data.crew[3];
  const divs = Array(4).fill(null);

  return (
    <main className="bg-[url('/assets/crew/background-crew-mobile.jpg')]  bg-cover bg-fixed h-[55rem]">
      <section className="mx-7 translate-y-[8rem] mb-[-10rem]">
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

          <div className="flex items-center flex-col justify-center gap-6">
            <div className="flex flex-row gap-4  ">
              {divs.map((_, i) => (
                <div
                  key={i}
                  className=" h-[12px] w-[12px] bg-[white] mb-3 flex rounded-full"
                ></div>
              ))}
            </div>
            <figure className="">
              <img
                src={crewData.images.png}
                alt={crewData.name}
                className=" w-[271.3px]"
              />
            </figure>
          </div>
        </article>
      </section>
    </main>
  );
};

export default CrewBody;
