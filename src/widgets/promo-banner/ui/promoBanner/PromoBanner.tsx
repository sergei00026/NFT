import s from './promoBanner.module.scss';
import clsx from 'clsx';
import { PromoBannerContent } from '@/widgets/promo-banner/ui/promoBanner/PromoBannerContent';
import { PromoBannerImage } from '@/widgets/promo-banner/ui/promoBanner/PromoBannerImage';

type PropsPromoBanner = {
  className?: string;
};

export const PromoBanner = (props: PropsPromoBanner) => {
  const { className } = props;

  return (
    <section className={clsx(s.promoBanner, className)}>
      <div className='container'>
        <div className={s.promoBanner__body}>
          <PromoBannerContent />
          <PromoBannerImage />
        </div>
      </div>
    </section>
  );
};
