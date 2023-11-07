import { useState } from 'react';
import arrowIcon from '../assets/baseline-keyboard_arrow_right-24px.svg';

const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    if (!email || !emailRegEx.test(email)) {
      e.preventDefault();
      console.log(!email, !emailRegEx.test(email));
      return;
    }
  };

  return (
    <div className="col-span-full bg-subscribe-image bg-cover bg-center">
      <div className="relative z-10 col-span-full flex h-[386px] flex-col items-center justify-center bg-[#000000d0] md:h-[380px] xl:h-[550px]">
        <h3
          id="about-us"
          className="my-5 font-montserrat text-3xl font-bold text-white"
        >
          Підписка
        </h3>

        <p className="mb-[54px] text-center text-[18px] text-white">
          Бути в курсі всіх актуальних <br className="md:hidden" /> подій та
          останніх новин.
        </p>

        <form onSubmit={handleForm} className="flex md:gap-4">
          <input
            className="box-border w-full py-3 pl-6 font-IBMPlexSans text-base md:w-[374px]"
            placeholder="E-mail"
            value={email}
            onChange={handleChange}
          />
          <button>
            <img
              className="h-[50px] w-[50px] bg-[#0eb5d8] p-[14px] invert md:h-[70px] md:w-[70px] md:p-[20px]"
              src={arrowIcon}
              alt="arrowIcon"
            />
          </button>
        </form>
      </div>
    </div>
  );
};
