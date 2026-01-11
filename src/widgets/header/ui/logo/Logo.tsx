import s from './logo.module.scss';
import clsx from 'clsx';
import { Logoicon } from '../../../../../assets/icons/components';
import Link from 'next/link';

type PropsLogo = {
  className?: string;
};

export const Logo = (props: PropsLogo) => {
  const { className } = props;

  return (
    <Link
      href='/'
      className={clsx(s.logo, className)}
    >
      <Logoicon className={s.icon} />
      <p className={s.text}>DiveSea</p>
    </Link>
  );
};
