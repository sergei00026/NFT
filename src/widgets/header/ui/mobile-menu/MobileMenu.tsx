'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { useScrollLock } from '@/shared/lib/scroll/useScrollLock';
import { NavigateList } from '../navigate/NavigateList';
import { BurgerButton } from './BurgerButton';
import s from './mobileMenu.module.scss';
import { PolymorphicButton } from '@/shared/ui/polymorphicButton';
import { SocialLinks } from '@/shared/ui/social-links';

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  useScrollLock(open);

  useEffect(() => {
    if (open) closeMenu();
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.nav
            className={s.drawer}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <NavigateList onItemClick={() => setOpen(false)} />
            <SocialLinks onItemClick={closeMenu} />
            <PolymorphicButton
              onClick={closeMenu}
              className={s.btnButton}
            >
              Connect Wallet
            </PolymorphicButton>
          </motion.nav>
        )}
      </AnimatePresence>
      <BurgerButton
        isOpen={open}
        onClick={() => setOpen(!open)}
      />
    </>
  );
};
