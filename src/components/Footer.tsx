import { GridContainer } from './GridContainer';

import facebookIco from '../assets/facebook-letter-logo.svg';
import instagramIco from '../assets/instagram (3).svg';

export const Footer = () => {
  return (
    <>
      <GridContainer>
        <div className="col-start-2 col-end-4 row-start-1 mt-8 justify-between  md:col-end-3 md:row-end-4">
          <div className="font-montserrat text-4xl font-bold uppercase leading-[100%]">
            na
            <br />
            mu
          </div>
        </div>

        <div className="col-start-3 row-start-1 mt-8 flex justify-end gap-5 self-center md:col-start-2 md:row-start-3 md:justify-start md:gap-7">
          <a href="#">
            <img src={facebookIco} alt="facebook" />
          </a>
          <a href="#">
            <img src={instagramIco} alt="instagram" />
          </a>
        </div>

        <p className="col-start-2 row-start-2 mb-5 mt-10 md:col-span-2 md:col-start-3">
          Графік роботи
        </p>

        <p className="col-start-3 row-start-2 mt-10 md:col-span-2 md:col-start-5">
          Контакти:
        </p>

        <div className="col-start-2 row-start-3 font-IBMPlexSans text-[14px] leading-[150%] md:col-span-2 md:col-start-3 ">
          <p>
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
          <br />
          <p>
            Вихідні понеділок, вівторок <br /> Каса припиняє роботу за 1 годину
            до закриття музею
          </p>
        </div>

        <div className="col-start-3 row-start-3 font-IBMPlexSans text-[14px] leading-[150%] md:col-span-2 md:col-start-5">
          вул. М. Грушевського, 6; Київ, 01001 <br /> тел. +38 (044) 278-13-57
          <br /> факс +38 (044) 278-74-54 <br />
          e-mail: info@namu.kiev.ua
        </div>

        <hr className="col-start-2 col-end-4 row-start-4 my-[40px] border-[#1a5a4c80] md:col-start-3 md:col-end-7 xl:hidden" />

        <div className="relative right-[15px] col-start-8 row-span-4 hidden h-[260px] w-px self-center border-x-[0.5px] border-[#1a5a4c80] xl:block " />

        <div className="col-start-2 font-IBMPlexSans text-[14px] md:col-start-3  md:row-start-5 md:mb-5 xl:col-start-9 xl:row-start-2 xl:self-end">
          <a href="#">Галерея</a>
        </div>
        <div className="col-start-3 font-IBMPlexSans text-[14px] md:col-start-5 md:row-start-5 md:mb-5 xl:col-start-11 xl:row-start-2 xl:self-end">
          <a href="#">Про Нас</a>
        </div>
        <div className="col-start-2 row-start-2 font-IBMPlexSans text-[14px] md:col-span-2 md:col-start-3 md:row-start-6 xl:col-start-9 xl:row-start-3">
          <a href="#"> Виставки та події</a>
        </div>
        <div className="col-start-3 row-start-2 font-IBMPlexSans text-[14px] md:col-start-5 md:row-start-6 xl:col-start-11 xl:row-start-3">
          <a href="#">Контакти</a>
        </div>

        <hr className="col-start-2 col-end-4 my-[40px] border-white xl:col-start-7" />
      </GridContainer>

      <GridContainer>
        <p className="col-start-2 col-end-4 my-1 text-center font-IBMPlexSans text-[12px] font-light md:col-start-8 md:row-start-1 md:text-right xl:col-start-12 xl:col-end-[14]">
          Designed by Zhyriada Marina
        </p>

        <p className="col-span-3 col-start-2 row-start-1 my-1 font-IBMPlexSans text-[12px] font-light">
          Copyright © 2019. All Rights Reserved.
        </p>
      </GridContainer>
    </>
  );
};
