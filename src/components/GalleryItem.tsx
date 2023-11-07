import React, { useContext } from 'react';
import { appContext } from '../Contexts/AppContext';

type Props = {
  imgUrl: string;
  title: string;
  children: React.ReactNode;
  date: string;
};

export const GalleryItem: React.FC<Props> = ({
  imgUrl,
  title,
  children,
  date,
}) => {
  const { windowDimensions } = useContext(appContext);

  const description = (
    <>
      <div className=" mt-5 flex justify-between md:justify-start md:gap-8">
        <span className="font-IBMPlexSans text-base font-medium uppercase text-sub-text">
          виставка
        </span>
        <span className="font-IBMPlexSans text-base font-bold uppercase text-dark-green">
          {date}
        </span>
      </div>

      <h3>
        <p className="my-[10px] inline-block font-montserrat text-[28px] font-normal leading-[100%] md:my-[16px] md:text-4xl">
          {title}
        </p>
        <div className="relative bottom-1 ml-[15px] inline-block h-[10px] w-[10px] bg-orange md:h-[15px] md:w-[15px]" />
      </h3>

      <p className="font-IBMPlexSans text-base font-light leading-[150%] text-description md:w-[460px] xl:w-[370px]">
        {children}
      </p>
    </>
  );

  return (
    <>
      <div className="col-start-2 col-end-4 md:col-end-8 xl:col-end-9">
        <div className="relative h-[210px] transition-all md:h-[520px] md:hover:scale-105">
          <img
            className="pointer-events-none absolute top-0 z-10 block h-[210px] w-full object-cover md:h-[520px]"
            src={imgUrl}
            alt={title}
            onMouseEnter={e => e.currentTarget.classList.add('scale-105')}
            onMouseLeave={e => e.currentTarget.classList.remove('scale-105')}
          />
        </div>
        {windowDimensions.width < 1280 && description}
      </div>

      {windowDimensions.width >= 1280 && (
        <div className="xl:col-span-4 xl:col-start-10 xl:self-center">
          {description}
        </div>
      )}
    </>
  );
};
