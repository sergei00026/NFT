import s from './footer.module.scss';
import clsx from 'clsx';
import { FooterNav } from '@/widgets/footer/ui/footer/FooterNav';
import { FooterBottom } from '@/widgets/footer/ui/footer/FooterBottom';
import { FooterTop } from '@/widgets/footer/ui/footer/FooterTop';

type PropsFooter = {
  className?: string;
};

export const Footer = (props: PropsFooter) => {
  const { className } = props;

  return (
    <footer className={clsx(s.footer, className)}>
      <div className='container'>
        <div className={s.footer__body}>
          <FooterTop />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};
