import { useEffect, useState } from "react";

export const useScroll = ( targetDiv: string ) => {
    const [isNavBarFixed, setIsNavBarFixed] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        // Obtener las coordenadas del NavBar y del div
        const navBar = document.getElementById("navbar");
        const div = document.getElementById(targetDiv);
  
        if (navBar && div) {
          const navBarRect = navBar.getBoundingClientRect();
          const divRect = div.getBoundingClientRect();
  
          setIsNavBarFixed(navBarRect.bottom >= divRect.top);
        }
      };
  
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return {
    isNavBarFixed,
  };
};
