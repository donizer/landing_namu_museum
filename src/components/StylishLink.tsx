import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  href?: string;
  newWindow?: boolean;
};

export const StylishLink: React.FC<Props> = ({ children, href, newWindow }) => {
  return (
    <a
      target={`${newWindow ? '_blank' : ''}`}
      className="bg-white transition-all duration-200 hover:bg-dark-green hover:text-white"
      href={href}
    >
      {children}
    </a>
  );
};
