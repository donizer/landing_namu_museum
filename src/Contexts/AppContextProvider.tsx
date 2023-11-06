import { ReactNode, useState, useEffect } from 'react';
import { appContext, AppContextType } from './AppContext';
import { getWindowDimensions } from '../utils/getWindowDimensions';

type Props = {
  children: ReactNode;
};

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWindowScrolled, setIsWindowScrolled] = useState(window.scrollY > 0);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsWindowScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsWindowScrolled]);

  const state: AppContextType = {
    isMenuOpen,
    setIsMenuOpen,
    toggleMenu,
    isWindowScrolled,
    setIsWindowScrolled,
    windowDimensions,
    setWindowDimensions,
  };

  return <appContext.Provider value={state}>{children}</appContext.Provider>;
};
