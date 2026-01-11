import s from './heroContent.module.scss';
import clsx from 'clsx';
import { HeroStats } from '@/widgets/hero-section';
import { PolymorphicButton } from '@/shared/ui/polymorphicButton';
import { HeroContentMotion, HeroMotionItem } from '@/widgets/hero-section/ui/heroContent/HeroContentMotion';

type PropsHeroContent = {
  className?: string;
};

export const HeroContent = (props: PropsHeroContent) => {
  const { className } = props;

  return (
    <HeroContentMotion>
      <div className={clsx(s.heroContent, className)}>
        <div className={s.mobileText}>OVER 1M CREATORS</div>
        <div className={s.heroContent__body}>
          <div className={s.heroContent__main}>
            <HeroMotionItem>
              <h1 className={s.heroContent__h1}>Discover And Create NFTs</h1>
            </HeroMotionItem>
            <HeroMotionItem>
              <p className={s.heroContent__desc}>
                Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a{' '}
                <span>$20 bonus.</span>
              </p>
            </HeroMotionItem>
          </div>
          <HeroMotionItem>
            <div className={s.heroContent__btns}>
              <PolymorphicButton className={s.heroContent__btn}>Explore More</PolymorphicButton>
              <PolymorphicButton
                className={s.heroContent__btn}
                variant='outline'
              >
                create NFT
              </PolymorphicButton>
            </div>
          </HeroMotionItem>
        </div>
        <HeroMotionItem>
          <HeroStats />
        </HeroMotionItem>
      </div>
    </HeroContentMotion>
  );
};
