import { Link } from 'react-router-dom';

const HomeBody = () => {
  return (
    <main className="bg-[url('/assets/home/background-home-mobile.jpg')] bg-no-repeat  bg-cover bg-fixed max-[765px]:h-[52rem] max-[375px]:h-[50rem] min-[412px]:h-screen min-[768px]:bg-[url('/assets/home/background-home-tablet.jpg')] min-[768px]:h-screen min-[1100px]:bg-[url('/assets/home/background-home-desktop.jpg')]">
      <section className=" mx-7 -z-10 translate-y-[8rem] min-[768px]:translate-y-[11rem] min-[1100px]:translate-y-[15rem] ">
        <article className=" flex flex-col text-center gap-[8rem]  max-[375px]:gap-[6rem] min-[768px]:gap-[3rem] min-[1100px]:flex-row min-[1100px]:items-center min-[1100px]:justify-center min-[1100px]:mx-[4rem]  min-[1100px]:gap-[8rem]">
          <div className="flex flex-col text-center gap-3 min-[768px]:gap-0 min-[1100px]:text-left">
            <h2 className="tracking-[2.4px] max-[320px]:tracking-[2px] min-[768px]:text-[28px] min-[768px]:tracking-[4px] ">
              SO, YOU WANT TO TRAVEL TO
            </h2>
            <h1 className="text-[80px] uppercase tracking-[2.2px] font-[Bellefair]  max-[320px]:text-[70px] min-[768px]:text-[144px]">
              Space
            </h1>
            <p className="text-[16px] leading-[27px]  max-[320px]:leading-[20px] text-[#D0D6F9] min-[768px]:px-[7rem] min-[1100px]:ml-[-7rem] min-[1100px]:leading-[32px] min-[1100px]:w-[45rem]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Link to={'destination'}>
              <span className="bg-[#fff] w-[9.5rem] h-[9.5rem] flex items-center justify-center font-[Bellefair] rounded-full text-[18px] tracking-[2px] text-[#0B0D17] uppercase animate-up-down min-[768px]:w-[17rem] min-[768px]:h-[17rem] min-[768px]:text-[32px]">
                Explore
              </span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
};

export default HomeBody;
