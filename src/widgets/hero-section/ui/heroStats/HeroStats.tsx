import s from './heroStats.module.scss';
import clsx from 'clsx';
import { heroStats } from '@/widgets/hero-section/model/heroStats.config';

type PropsHeroStats = {
  className?: string;
};

export const HeroStats = (props: PropsHeroStats) => {
  const { className } = props;

  return (
    <ul className={clsx(s.heroStats, className)}>
      {heroStats.map(({ label, value }) => (
        <li
          className={s.item}
          key={label}
        >
          <strong className={s.value}>{value}</strong>
          <span className={s.label}>{label}</span>
        </li>
      ))}
    </ul>
  );
};
