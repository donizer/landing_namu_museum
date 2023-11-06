type Props = {
  imgUrl: string;
};

export const PromoItem: React.FC<Props> = ({ imgUrl }) => {
  return (
    <>
      <div className="col-span-full h-[293px] md:col-start-2 md:col-end-8 md:h-[510px] xl:col-span-full xl:h-[652px] ">
        <img
          className="pointer-events-none h-[210px] w-full object-cover md:h-[390px] xl:h-[550px]"
          src={imgUrl}
          alt=""
        />
        <div className="relative bottom-10 m-auto grid h-[140px] grid-cols-2 border-b-2 border-[#1a5a4c19] bg-white md:bottom-20 md:h-[204px] md:px-[100px] md:py-6 xl:w-[570px]">
          <div className="col-span-full flex justify-between px-5 py-4 xl:px-0">
            <span className="relative font-IBMPlexSans text-base font-medium uppercase text-sub-text">
              лекція
            </span>

            <span className="relative font-IBMPlexSans text-base font-bold uppercase text-dark-green">
              26/08/2019 - 11:00
            </span>
          </div>
          <h3 className="col-span-full mb-[14px] text-center font-montserrat text-[28px] font-normal leading-[100%] md:text-left md:text-[36px]">
            Від класицизму до <br className="hidden md:block" /> романтизму
          </h3>
        </div>
      </div>
    </>
  );
};
