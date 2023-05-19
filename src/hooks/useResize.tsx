import { useEffect, useState } from 'react';

export const useResize = () => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResizing = () => {
      if (window.innerWidth < 640) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };

    window.addEventListener('resize', handleResizing);

    return () => {
      window.removeEventListener('resize', handleResizing);
    };
  }, []);

  return isSmall;
};
