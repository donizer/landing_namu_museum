import { useContext } from 'react';
import { appContext } from '../Contexts/AppContext';
import { GridContainer } from './GridContainer';

import burgerButton from '../assets/baseline-menu-24px.svg';
import arrowIcon from '../assets/baseline-keyboard_arrow_right-24px.svg';
import museum from '../assets/Natsionalnij-hudozhnij-muzej-Ukrayini-Kiyiv-10-1800x1200.png';

export const Header = () => {
  const { turnOnMenu } = useContext(appContext);

  return (
    <GridContainer id="home">
      <button
        className="absolute left-6 top-7 z-10 h-fit w-fit md:left-8 md:top-9"
        onClick={turnOnMenu}
      >
        <img src={burgerButton} alt="burgerButton" />
      </button>

      <div className="absolute left-0 top-[522px] hidden -rotate-90 select-none items-center gap-5 xl:flex">
        <div className="h-px w-[70px] bg-dark-green" />
        <p className="font-IBMPlexSans text-base font-bold text-dark-green">
          Події
        </p>
      </div>

      <div className="absolute left-0 right-0 top-2 select-none text-center font-montserrat text-3xl font-bold uppercase leading-[30px] md:left-[25%] md:text-4xl xl:left-0">
        <a href="#home">
          na
          <br />
          mu
        </a>
      </div>

      <img
        className="pointer-events-none col-span-full w-full select-none object-cover object-bottom md:col-start-5 xl:col-start-7 2xl:max-h-[655px]"
        src={museum}
        alt=""
      />

      <hr className="col-span-full my-[10px] border-white md:hidden" />

      <div className="col-start-2 col-end-4 grid content-end gap-y-2 md:row-start-1 md:mb-[20px] md:gap-y-[38px] xl:col-end-7 xl:mb-[118px] xl:gap-y-[90px]">
        <h1 className=" text-center font-montserrat text-[45px] font-bold leading-[100%] md:text-left md:text-[54px] xl:text-7xl">
          ХУДОЖНІЙ МУЗЕЙ
        </h1>

        <a
          href="#events"
          className="flex w-[280px] justify-self-center bg-white transition-all duration-200 hover:bg-dark-green hover:text-white md:w-[270px] md:place-self-start xl:place-self-end"
        >
          <div className="h-[50px] border-[1px] border-dark-green px-20 py-3 font-IBMPlexSans text-base  uppercase md:h-[70px] md:py-5 xl:w-[200px]">
            Квитки
          </div>

          <img
            className="h-[50px] w-[50px] bg-dark-green p-3 transition-all duration-200 hover:p-[12px] md:h-[70px] md:w-[70px] md:p-[20px] "
            src={arrowIcon}
            alt="arrowIcon"
          />
        </a>
      </div>
    </GridContainer>
  );
};
