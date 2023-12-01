import { useState } from 'react';
import arrowIcon from '../assets/baseline-keyboard_arrow_right-24px.svg';

const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    if (!email.trim() || !emailRegEx.test(email)) {
      e.preventDefault();
      setError('Введіть коректний E-mail');
      return;
    }

    setEmail('');
  };

  return (
    <div className="col-span-full bg-subscribe-image bg-cover bg-center">
      <div className="relative z-10 col-span-full flex h-[386px] flex-col items-center justify-center bg-[#000000d0] md:h-[380px] xl:h-[550px]">
        <h3
          id="about-us"
          className="my-5 font-montserrat text-3xl font-bold leading-[100%] text-white md:my-4 md:text-5xl"
        >
          Підписка
        </h3>

        <p className="mb-[54px] w-[280px] text-center text-[18px] leading-[100%] text-white md:w-[460px] md:text-left">
          Бути в курсі всіх актуальних <br className="md:hidden" /> подій та
          останніх новин.
        </p>

        <form
          onSubmit={handleForm}
          className="relative flex md:w-[460px] md:gap-4"
        >
          <p
            className={`md:text-l absolute -top-6 w-[280px] text-left text-sm text-red-700 md:w-[460px] ${
              error ? 'visible' : 'invisible'
            }`}
          >
            {error}
          </p>
          <input
            className="box-border w-full py-3 pl-6 font-IBMPlexSans text-base outline-none md:h-[70px] md:w-[374px]"
            placeholder="E-mail"
            value={email}
            onChange={handleChange}
          />
          <button className="h-fit w-fit shrink-0">
            <img
              className="bg-[#0eb5d8] p-[14px] invert transition-all duration-200 hover:p-[12px] md:h-[70px] md:w-[70px] md:p-[20px] md:hover:p-[12px]"
              src={arrowIcon}
              alt="arrowIcon"
            />
          </button>
        </form>
      </div>
    </div>
  );
};
