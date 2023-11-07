import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  href?: string
};

export const NavAnchor: React.FC<Props> = ({ children, href }) => {
  return (
    <a
      className="bg-white transition-all hover:bg-dark-green hover:text-white"
      href={href}
    >
      {children}
    </a>
  );
};
