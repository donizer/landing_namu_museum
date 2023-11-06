import arrowIcon from '../assets/baseline-keyboard_arrow_right-24px.svg';

export const Subscribe = () => {
  return (
    <div className="col-span-full bg-subscribe-image bg-cover bg-center">
      <div className="relative z-10 col-span-full flex h-[386px] flex-col items-center justify-center bg-[#000000d0] md:h-[380px] xl:h-[550px]">
        <h3 className="my-5 font-montserrat text-3xl font-bold text-white">
          Підписка
        </h3>

        <p className="mb-[54px] text-center text-[18px] text-white">
          Бути в курсі всіх актуальних <br className="md:hidden" /> подій та
          останніх новин.
        </p>

        <div className=" flex">
          <input
            className="box-border w-full py-3 pl-6 font-IBMPlexSans text-base md:w-[374px]"
            placeholder="E-mail"
          />
          <img
            className="h-[50px] w-[50px] bg-[#0eb5d8] p-[14px] invert"
            src={arrowIcon}
            alt="arrowIcon"
          />
        </div>
      </div>
    </div>
  );
};
