import s from './heroSection.module.scss';
import clsx from 'clsx';
import { HeroContent } from '@/widgets/hero-section/ui/heroContent/HeroContent';
import { HeroImages } from '@/widgets/hero-section/ui/heroImages/HeroImages';

type PropsHeroSection = {
  className?: string;
};

export const HeroSection = (props: PropsHeroSection) => {
  const { className } = props;

  return (
    <section className={clsx(s.heroSection, className)}>
      <div className='container'>
        <div className={s.heroSection__inner}>
          <HeroContent />
          <HeroImages />
        </div>
      </div>
    </section>
  );
};
