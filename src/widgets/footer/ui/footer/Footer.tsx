import s from './footer.module.scss';
import { FooterBottom } from '@/widgets/footer/ui/footer/FooterBottom';
import { FooterTop } from '@/widgets/footer/ui/footer/FooterTop';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className='container'>
        <div className={s.footer__body}>
          <FooterTop />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};
