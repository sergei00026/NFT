import { useEffect } from 'react';

export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) return;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    document.body.style.overflow = 'hidden';
    (document.querySelector('.wrapper') as HTMLElement).style.overflow = 'hidden';
    if (!isMobile) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = '';
      (document.querySelector('.wrapper') as HTMLElement).style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isLocked]);
};
