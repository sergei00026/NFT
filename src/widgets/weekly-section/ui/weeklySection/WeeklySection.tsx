import s from './weeklySection.module.scss';
import clsx from 'clsx';
import { NftSlider } from '@/features/nft-slider/ui/NftSlider';

type PropsWeeklySection = {
  className?: string;
};

export const WeeklySection = (props: PropsWeeklySection) => {
  const { className } = props;

  return (
    <section className={clsx(s.weeklySection, className)}>
      <h2 className={s.title}>Weekly - Top NFT</h2>
      <NftSlider />
    </section>
  );
};
