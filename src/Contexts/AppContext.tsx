import { createContext } from 'react';

export type AppContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
  isWindowScrolled: boolean;
  setIsWindowScrolled: React.Dispatch<React.SetStateAction<boolean>>;
  windowDimensions: {
    width: number;
    height: number;
  };
  setWindowDimensions: React.Dispatch<
    React.SetStateAction<{
      width: number;
      height: number;
    }>
  >;
};

const defaultValues = {
  isMenuOpen: false,
  setIsMenuOpen: () => null,
  toggleMenu: () => null,
  isWindowScrolled: false,
  setIsWindowScrolled: () => null,
  windowDimensions: { width: 0, height: 0 },
  setWindowDimensions: () => null,
};

export const appContext = createContext<AppContextType>(defaultValues);
