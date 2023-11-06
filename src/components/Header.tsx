import { useContext } from 'react';
import { appContext } from '../Contexts/AppContext';
import { GridContainer } from './GridContainer';

import burgerButton from '../assets/baseline-menu-24px.svg';
import arrowIcon from '../assets/baseline-keyboard_arrow_right-24px.svg';
import museum from '../assets/Natsionalnij-hudozhnij-muzej-Ukrayini-Kiyiv-10-1800x1200.png';

export const Header = () => {
  const { toggleMenu } = useContext(appContext);

  return (
    <GridContainer>
      <button onClick={toggleMenu}>
        <img
          className="absolute left-6 top-7 z-10 md:left-8 md:top-9"
          src={burgerButton}
          alt="burgerButton"
        />
      </button>

      <div className="absolute left-0 top-[522px] hidden -rotate-90 select-none items-center gap-5 xl:flex">
        <div className="h-px w-[70px] bg-dark-green" />
        <p className="font-IBMPlexSans text-base font-bold text-dark-green">
          Події
        </p>
      </div>

      <div className="absolute left-0 right-0 top-2 select-none text-center font-montserrat text-3xl font-bold uppercase leading-[30px] md:left-[25%] md:text-4xl xl:left-0">
        na
        <br />
        mu
      </div>

      <img
        className="pointer-events-none col-span-full w-full select-none md:col-start-5 xl:col-start-7"
        src={museum}
        alt=""
      />

      <div className="col-start-2 col-end-4 grid content-center gap-y-2 md:row-start-1 xl:col-end-7 xl:gap-y-20">
        <h1 className=" my-5 text-center font-montserrat text-[45px] font-bold leading-[100%] md:text-left xl:text-7xl">
          ХУДОЖНІЙ МУЗЕЙ
        </h1>
        <button className="flex place-self-end">
          <div className="h-[50px] border-[1px] border-dark-green px-20 py-3 font-IBMPlexSans text-base uppercase xl:h-[70px] xl:w-[200px] xl:py-5">
            Квитки
          </div>
          <img
            className="h-[50px] w-[50px] bg-dark-green xl:h-[70px] xl:w-[70px]"
            src={arrowIcon}
            alt="arrowIcon"
          />
        </button>
      </div>
    </GridContainer>
  );
};
