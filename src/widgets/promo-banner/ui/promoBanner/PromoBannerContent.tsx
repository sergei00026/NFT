import s from './promoBanner.module.scss';
import clsx from 'clsx';
import { PolymorphicButton } from '@/shared/ui/polymorphicButton';

type PropsPromoBanner = {
  className?: string;
};

export const PromoBannerContent = (props: PropsPromoBanner) => {
  const { className } = props;

  return (
    <div className={clsx(s.promoBannerContent, className)}>
      <h2 className={s.title}>Create and Sell NFTs</h2>
      <p className={s.subTitle}>World’s Largest NFT Place</p>
      <div className={s.actions}>
        <PolymorphicButton
          variant='outline'
          className={clsx(s.btn, s.btnBlack)}
        >
          Explore More
        </PolymorphicButton>
        <PolymorphicButton className={clsx(s.btn, s.btnWhite)}>Sell Artwork</PolymorphicButton>
      </div>
    </div>
  );
};
