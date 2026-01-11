import s from './footer.module.scss';
import { FooterNav } from '@/widgets/footer/ui/footer/FooterNav';
import { Logo } from '@/widgets/header/ui/logo/Logo';

type PropsFooter = {
  className?: string;
};

export const FooterTop = (props: PropsFooter) => {
  const { className } = props;

  return (
    <>
      <Logo className={s.logoFooter} />
      <FooterNav />
    </>
  );
};
