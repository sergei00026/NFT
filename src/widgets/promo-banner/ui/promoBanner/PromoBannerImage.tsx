import s from './promoBanner.module.scss';
import clsx from 'clsx';
import banner from '../../../../../assets/images/banner.png';
import Image from 'next/image';

type PropsPromoBanner = {
  className?: string;
};

export const PromoBannerImage = (props: PropsPromoBanner) => {
  const { className } = props;

  return (
    <div className={clsx(s.promoBannerImage, className)}>
      <Image
        src={banner}
        alt={'banner'}
        width={369}
        height={249}
      />
    </div>
  );
};
