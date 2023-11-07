import { GridContainer } from './GridContainer';

import facebookIco from '../assets/facebook-letter-logo.svg';
import instagramIco from '../assets/instagram (3).svg';
import { StylishLink } from './StylishLink';

export const Footer = () => {
  return (
    <>
      <GridContainer>
        <div className="col-start-2 col-end-3  row-start-1 mb-8 justify-between md:col-end-3 md:row-end-4">
          <div className="select-none font-montserrat text-4xl font-bold uppercase leading-[100%]">
            <a href="#home">
              na
              <br />
              mu
            </a>
          </div>
        </div>

        <div className="col-start-3 row-start-1 mb-8 flex items-center justify-end gap-5 md:col-start-2 md:row-start-2 md:mt-[90px] md:items-start md:justify-start md:gap-7">
          <div>
            <a href="https://www.facebook.com/namu.museum" target="_blank">
              <img src={facebookIco} alt="facebook" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/namu.museum/" target="_blank">
              <img src={instagramIco} alt="instagram" />
            </a>
          </div>
        </div>

        <p className="col-start-2 mb-5 self-center md:col-span-2 md:col-start-3 xl:col-start-4">
          Графік роботи
        </p>

        <p
          id="contacts"
          className="col-start-3 mb-5 self-center md:col-span-2 md:col-start-5 xl:col-start-6"
        >
          Контакти:
        </p>

        <div className="col-start-2 row-start-3 font-IBMPlexSans text-[14px] leading-[150%] md:col-span-2 md:col-start-3 md:row-start-2 xl:col-start-4">
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
            <span className="font-semibold">Вихідні:</span> понеділок, вівторок
            <br />
            Каса припиняє роботу за 1 годину
            <br />
            до закриття музею
          </p>
        </div>

        <div className="col-start-3 row-start-3 font-IBMPlexSans text-[14px] leading-[150%] md:col-span-2 md:col-start-5 md:row-start-2 xl:col-start-6">
          <StylishLink
            newWindow
            href="https://maps.app.goo.gl/ATmt4KPzmmUjcuLW7"
          >
            вул. М. Грушевського, 6; Київ, 01001
          </StylishLink>
          <br />
          <StylishLink href="tel:+380442781357">
            тел. +38 (044) <br className="md:hidden" /> 278-13-57
          </StylishLink>
          <br />
          <StylishLink href="fax:+380442781357">
            факс +38 (044) <br className="md:hidden xl:inline" /> 278-74-54
          </StylishLink>
          <br />
          <StylishLink href="mailto:info@namu.kiev.ua">
            e-mail: info@namu.kiev.ua
          </StylishLink>
        </div>

        <hr className="col-start-2 col-end-4 row-start-4 my-[40px] border-[#1a5a4c80] md:col-start-3 md:col-end-7 md:my-[64px] xl:hidden" />

        <div className="col-start-8 row-span-2 hidden h-full w-px place-self-center justify-self-center bg-[#1a5a4c80] xl:block " />

        <div className="col-start-2 mb-5 font-IBMPlexSans text-[14px] md:col-start-3  md:row-start-5  xl:col-start-9 xl:row-start-1 xl:self-end">
          <StylishLink href="#gallery">Галерея</StylishLink>
        </div>

        <div className="col-start-3 mb-5 font-IBMPlexSans text-[14px] md:col-start-5 md:row-start-5 xl:col-start-11 xl:row-start-1 xl:self-end">
          <StylishLink href="#about-us">Про Нас</StylishLink>
        </div>
        <div className="col-start-2 font-IBMPlexSans text-[14px] md:col-span-2 md:col-start-3 md:row-start-6 xl:col-start-9 xl:row-start-2">
          <StylishLink href="#events">Виставки та події</StylishLink>
        </div>
        <div className="col-start-3 font-IBMPlexSans text-[14px] md:col-start-5 md:row-start-6 xl:col-start-11 xl:row-start-2">
          <StylishLink href="#contacts">Контакти</StylishLink>
        </div>

        <hr className="col-start-2 col-end-4 my-[40px] border-white md:my-[60px] xl:col-start-7" />
      </GridContainer>

      <GridContainer>
        <p className="col-start-2 col-end-4 my-1 text-center font-IBMPlexSans text-[12px] font-light md:col-start-8 md:row-start-1 md:text-right xl:col-start-12 xl:col-end-[14]">
          Designed by Zhyriada Marina
        </p>

        <p className="col-span-2 col-start-2 my-1 text-center font-IBMPlexSans text-[12px] font-light xl:col-span-3">
          Copyright © 2019. All Rights Reserved.
        </p>
      </GridContainer>
    </>
  );
};
