import { useState, useEffect, useCallback } from 'react';
import { isBrowser } from './isBrowser';

const getSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export function useViewportSize() {
  if (!isBrowser())
  {
    return {
      width: 0,
      height: 0,
    };
  }

  const [size, setSize] = useState(getSize());

  const handleResize = useCallback(() => {
    let ticking = false;
    if (!ticking)
    {
      window.requestAnimationFrame(() => {
        setSize(getSize());
        ticking = false;
      });
      ticking = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}