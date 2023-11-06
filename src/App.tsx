import { useEffect, useContext } from 'react';
import { appContext } from './Contexts/AppContext';

import { Header } from './components/Header';
import { GridContainer } from './components/GridContainer';
import { ModalMenu } from './components/ModalMenu';
import { Gallery } from './components/Gallery';
import { Subscribe } from './components/Subscribe';

import arrowUpIcon from './assets/carbon_arrow-up.svg';

import landscape from './assets/6feef0e1382c45a417a76a506eba8891.jpg';
import birdImage from './assets/9da60a0fd71b0225dba2cdce986fa74e.jpg';
import redSun from './assets/09017e62cd8b96fa78cfd0b9cad36c20.jpg';

import { GalleryItem } from './components/GalleryItem';
import { PromoItem } from './components/PromoItem';

import facebookIco from './assets/facebook-letter-logo.svg';
import instagramIco from './assets/instagram (3).svg';

const body = document.querySelector('body');

function App() {
  const { isMenuOpen, isWindowScrolled } = useContext(appContext);

  useEffect(() => {
    if (!body) {
      return;
    }

    if (isMenuOpen) {
      body.style.overflow = 'hidden';
      body.style.overflowY = 'scroll';
      body.style.position = 'fixed';
    } else {
      body.style.overflow = 'auto';
      body.style.position = 'static';
    }
  }, [isMenuOpen]);

  return (
    <>
      <ModalMenu />

      <div className="wrapper">
        <a
          href="#header"
          className={`${
            isWindowScrolled ? '' : 'hidden'
          } fixed bottom-5 right-5 z-20 flex h-[50px] w-[50px] items-center justify-center rounded-full border-[1px] border-dark-green bg-white`}
        >
          <img className="scale-125" src={arrowUpIcon} alt="arrowUpIcon" />
        </a>

        <Header />

        <GridContainer>
          <hr className="col-span-full my-[25px] border-white xl:my-[100px]" />

          <h2 className="col-span-full text-center font-montserrat text-4xl font-bold leading-[100%] md:col-start-2 md:text-left xl:text-5xl">
            Актуальні <br className="md:hidden" /> події
          </h2>

          <hr className="col-span-full border-white xl:my-[28px]" />

          <GalleryItem
            imgUrl={landscape}
            date={'26.08-29.11.2019'}
            title={'Йду і повертаюсь'}
          >
            Національний Художній Музей України презентує унікальну частину
            колекції Градобанку - українське мистецтво другої половини 1980-1995
            років.
          </GalleryItem>

          <hr className="col-span-full border-white xl:my-[52px]" />

          <GalleryItem
            imgUrl={birdImage}
            date={'26.08-29.11.2019'}
            title={'І спогади і мрії'}
          >
            Національний художній музей України до 100 річчя від дня народження
            видатної української художниці Тетяни Яблонської відкриває
            ретроспективну ювілейну виставку «І спогади і мрії».
          </GalleryItem>

          <hr className="col-span-full border-white xl:my-[52px]" />

          <PromoItem imgUrl={redSun} />

          <hr className="col-span-full my-[25px] border-white xl:my-[100px]" />

          <h2 className="col-start-2 col-end-4 text-center font-montserrat text-4xl font-bold leading-[100%] md:col-end-8 md:text-left xl:text-5xl">
            Галерея
          </h2>

          <hr className="col-span-full my-[25px] border-white xl:my-[28px]" />

          <Gallery />

          <hr className="col-span-full my-[35px] border-white xl:my-[100px]" />

          <Subscribe />
        </GridContainer>

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
              Вихідні понеділок, вівторок <br /> Каса припиняє роботу за 1
              годину до закриття музею
            </p>
          </div>

          <div className="col-start-3 row-start-3 font-IBMPlexSans text-[14px] leading-[150%] md:col-span-2 md:col-start-5">
            вул. М. Грушевського, 6; Київ, 01001 <br /> тел. +38 (044) 278-13-57
            <br /> факс +38 (044) 278-74-54 <br />
            e-mail: info@namu.kiev.ua
          </div>

          <hr className="col-start-2 col-end-4 row-start-4 my-[40px] border-[#1a5a4c80] md:col-start-3 md:col-end-7 xl:hidden" />

          <div className="col-start-8 row-span-4 hidden h-[260px] w-px place-self-center border-x-[0.5px] border-[#1a5a4c80] xl:block " />

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
        <hr className="mt-[64px] h-0 md:mt-[36px]" />
      </div>
    </>
  );
}

export default App;
