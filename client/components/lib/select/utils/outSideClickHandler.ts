import { useEffect } from "react";




export const useClickOutside = (ref, callback) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback(false);
      }
    };
    useEffect(() => {
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    });
  };