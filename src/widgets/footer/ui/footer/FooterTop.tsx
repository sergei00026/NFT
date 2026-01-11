import s from './footer.module.scss';
import { FooterNav } from '@/widgets/footer/ui/footer/FooterNav';
import { Logo } from '@/widgets/header/ui/logo/Logo';

export const FooterTop = () => {
  return (
    <>
      <Logo className={s.logoFooter} />
      <FooterNav />
    </>
  );
};
