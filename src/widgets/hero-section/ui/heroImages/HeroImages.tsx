import s from './heroImages.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import firstImage1 from '@images/first-page-1.png';
import firstImage2 from '@images/first-page-2.png';
import { Firstpagearrow, Points } from '../../../../../assets/icons/components';
import {
  HeroArrowMotionItem,
  HeroImageMotionItem,
  HeroImagesMotion,
} from '@/widgets/hero-section/ui/heroImages/HeroImagesMotion';

type PropsHeroImages = {
  className?: string;
};

export const HeroImages = (props: PropsHeroImages) => {
  const { className } = props;

  return (
    <HeroImagesMotion>
      <div className={clsx(s.heroImages, className)}>
        <div className={s.img}>
          <HeroImageMotionItem>
            <div className={s.onlyBefore}>
              <Image
                src={firstImage1}
                alt={'firstImage'}
                fill
              />
            </div>
          </HeroImageMotionItem>
          <div className={s.absolute}>
            <HeroImageMotionItem>
              <div className={s.onlyBefore}>
                <Image
                  src={firstImage2}
                  alt={'firstImage'}
                  fill
                />
              </div>
            </HeroImageMotionItem>

            <HeroArrowMotionItem>
              <div className={s.arrow}>
                <Firstpagearrow className={s.arrowIcon} />
              </div>
            </HeroArrowMotionItem>

            <div className={s.points}>
              <Points className={s.pointsIcon} />
            </div>
          </div>
        </div>
      </div>
    </HeroImagesMotion>
  );
};
