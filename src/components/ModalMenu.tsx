import { useContext } from 'react';
import { appContext } from '../Contexts/AppContext';
import { GridContainer } from './GridContainer';

import closeBurger from '../assets/ri-close-fill.svg';


export const ModalMenu = () => {
  const { isMenuOpen, toggleMenu } = useContext(appContext);

  return (
    <div
      className={`fixed ${
        isMenuOpen ? 'bg-[#00000080]' : 'pointer-events-none bg-[#00000000]'
      } z-20 h-screen w-screen transition-all`}
    >
      <div
        className={`h-auto] absolute left-0 right-0 flex justify-center bg-[#1A5A4C] transition-all md:h-[225px] xl:h-[233px] ${
          isMenuOpen ? 'top-[0%]' : 'top-[-100%]'
        }`}
      >
        <GridContainer>
          <button onClick={toggleMenu}>
            <img
              className="absolute left-6 top-7 z-10 md:left-8 md:top-9"
              src={closeBurger}
              alt="burgerButton"
            />
          </button>

          <div className="grid-cols-menuMobile md:grid-cols-menuTablet xl:grid-cols-menuDesktop col-start-2 col-end-4 my-6 grid gap-x-5 gap-y-6 pl-[52px] font-IBMPlexSans text-base font-medium text-white md:col-end-4 md:pl-[64px] xl:pl-[126px]">
            <a className="" href="#">
              Галерея
            </a>
            <a className="" href="#">
              Про Нас
            </a>
            <a className="" href="#">
              Виставки та події
            </a>
            <a className="font-IBMPlexSans " href="#">
              Контакти
            </a>
          </div>

          <hr className="col-start-2 col-end-4 h-px border-white md:hidden" />

          <div className="relative left-10 top-8 col-start-4 row-start-1 hidden h-[145px] w-px place-self-center border-x-[0.5px] border-[#ffffff80] md:block xl:col-start-6" />

          <div className="col-start-2 col-end-4 row-span-2 my-5 font-IBMPlexSans text-[14px] font-thin leading-[150%] text-white md:col-start-5 md:col-end-8 md:row-start-1 md:grid md:grid-cols-2 xl:col-start-8 xl:col-end-12">
            <p className="mb-5">Графік роботи</p>
            <p className="col-start-1">
              <span className="font-semibold">12:00 — 20:00</span> середа
            </p>
            <p>
              <span className="font-semibold">12:00 — 20:00</span> четвер
            </p>
            <p>
              <span className="font-semibold">12:00 — 20:00 </span> п’ятниця
            </p>
            <p>
              <span className="font-semibold">11:00 — 19:00</span> субота
            </p>
            <p>
              <span className="font-semibold">11:00 — 19:00</span> неділя
            </p>
            <br className="md:hidden" />
            <p className="col-start-2 row-span-5 row-start-2">
              <span className=" font-semibold">Вихідні: </span>
              понеділок, вівторок <br /> Каса припиняє роботу за 1 годину до
              закриття музею
            </p>
          </div>
        </GridContainer>
      </div>
    </div>
  );
};
