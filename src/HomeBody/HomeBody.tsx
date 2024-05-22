// import React from 'react';
import NavBar from '../NavBar/NavBar';

const HomeBody = () => {
  return (
    <main className="bg-[url('/assets/images/home/background-home-mobile.jpg')] bg-no-repeat bg-cover h-screen">
      <header className="">
        <NavBar />
      </header>
      <section className=" mx-7 -z-10 translate-y-[7rem]">
        <article className=" flex flex-col text-center gap-[6rem] ">
          <div className="flex flex-col text-center gap-3">
            <h2 className="tracking-[2.4px]">SO, YOU WANT TO TRAVEL TO</h2>
            <h1 className="text-[80px] uppercase tracking-[2.2px] font-[Bellefair]">
              Space
            </h1>
            <p className="text-[15px] leading-[27px]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex items-center justify-center">
            z
            <span className="bg-[#fff] w-[9.5rem] h-[9.5rem] flex items-center justify-center font-[Bellefair] rounded-full text-[18px] tracking-[2px] text-[#0B0D17] uppercase">
              Explore
            </span>
          </div>
        </article>
      </section>
    </main>
  );
};

export default HomeBody;
