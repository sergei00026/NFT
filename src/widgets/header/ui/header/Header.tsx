import clsx from 'clsx';
import { Navigate } from '@/widgets/header/ui/navigate/Navigate';
import { Logo } from '@/widgets/header/ui/logo/Logo';
import { PolymorphicButton } from '@/shared/ui/polymorphicButton';
import { MobileMenu } from '@/widgets/header/ui/mobile-menu/MobileMenu';
import s from './header.module.scss';

type PropsHeader = {
  className?: string;
};

export const Header = (props: PropsHeader) => {
  const { className } = props;

  return (
    <header className={clsx(s.header, className)}>
      <div className='container'>
        <div className={s.header__body}>
          <Logo />
          <Navigate className={s.desktopNav} />
          <PolymorphicButton className={s.btn}>Connect Wallet</PolymorphicButton>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
