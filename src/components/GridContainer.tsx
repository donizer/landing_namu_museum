import React from 'react';

type Props = {
  children: React.ReactNode;
  dense?: boolean;
  id?: string;
};

export const GridContainer: React.FC<Props> = ({ children, dense, id }) => {
  const classDense = dense ? 'grid-flow-dense' : '';

  return (
    <div
      id={id}
      className={`2xl:grid-cols-wideDesktop xl:grid-cols-desktop relative left-0 right-0 grid grid-cols-mobile gap-x-5 md:grid-cols-tablet md:gap-x-[30px] ${classDense}`}
    >
      {children}
    </div>
  );
};
