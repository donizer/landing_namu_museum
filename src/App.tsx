import { useEffect, useContext } from 'react';
import { appContext } from './Contexts/AppContext';

import { Header } from './components/Header';
import { GridContainer } from './components/GridContainer';
import { ModalMenu } from './components/ModalMenu';
import { Gallery } from './components/GalleryGrid';
import { Subscribe } from './components/Subscribe';

import arrowUpIcon from './assets/carbon_arrow-up.svg';

import landscape from './assets/6feef0e1382c45a417a76a506eba8891.jpg';
import birdImage from './assets/9da60a0fd71b0225dba2cdce986fa74e.jpg';
import redSun from './assets/09017e62cd8b96fa78cfd0b9cad36c20.jpg';

import { GalleryItem } from './components/GalleryItem';
import { PromoItem } from './components/PromoItem';
import { Footer } from './components/Footer';

const body = document.querySelector('body');

function scrollToTop() {
  window.scrollTo(0, 0);
}

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
        <button
          className={`${
            isWindowScrolled ? '' : 'hidden'
          } group fixed bottom-5 right-5 z-20 flex h-[50px] w-[50px] items-center justify-center rounded-full border-[1px] border-dark-green bg-white hover:bg-dark-green md:bottom-[40px] md:right-[40px] xl:bottom-[55px] xl:right-[55px]`}
          onClick={scrollToTop}
        >
          <img
            className="scale-125 group-hover:invert"
            src={arrowUpIcon}
            alt="arrowUpIcon"
          />
        </button>

        <Header />

        <GridContainer>
          <hr className="col-span-full my-[25px] border-white md:my-[44px] xl:my-[100px]" />

          <h2
            id="events"
            className="col-span-full text-center font-montserrat text-4xl font-bold leading-[100%] md:col-start-2 md:text-left md:text-5xl xl:text-5xl"
          >
            Актуальні <br className="md:hidden" /> події
          </h2>

          <hr className="col-span-full my-[20px] border-white md:my-[24px] xl:my-[28px]" />

          <GalleryItem
            imgUrl={landscape}
            date={'26.08-29.11.2019'}
            title={'Йду і повертаюсь'}
          >
            Національний Художній Музей України презентує унікальну частину
            колекції Градобанку - українське мистецтво другої половини 1980-1995
            років.
          </GalleryItem>

          <hr className="col-span-full my-[30px] border-white md:my-[32px] xl:my-[52px]" />

          <GalleryItem
            imgUrl={birdImage}
            date={'26.08-29.11.2019'}
            title={'І спогади і мрії'}
          >
            Національний художній музей України до 100 річчя від дня народження
            видатної української художниці Тетяни Яблонської відкриває
            ретроспективну ювілейну виставку «І спогади і мрії».
          </GalleryItem>

          <hr className="col-span-full my-[30px] border-white md:my-[56px] xl:my-[52px]" />

          <PromoItem imgUrl={redSun} />

          <hr className="col-span-full my-[50px] border-white xl:my-[100px]" />

          <h2
            id="gallery"
            className="col-start-2 col-end-4 text-center font-montserrat text-4xl font-bold leading-[100%] md:col-end-8 md:text-left md:text-5xl xl:text-5xl"
          >
            Галерея
          </h2>

          <hr className="col-span-full my-[25px] border-white xl:my-[28px]" />

          <Gallery />

          <hr className="col-span-full my-[35px] border-white xl:my-[100px]" />

          <Subscribe />

          <hr className="col-span-full my-[25px] border-white" />
        </GridContainer>

        <Footer />
        <hr className="mt-[64px] h-0 md:mt-[36px]" />
      </div>
    </>
  );
}

export default App;
