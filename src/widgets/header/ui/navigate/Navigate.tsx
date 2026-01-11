'use client';
import s from './navigate.module.scss';
import clsx from 'clsx';
import { NavigateList } from '@/widgets/header/ui/navigate/NavigateList';

type PropsNavigate = {
  className?: string;
};

export const Navigate = (props: PropsNavigate) => {
  const { className } = props;

  return (
    <nav className={clsx(s.navigate, className)}>
      <NavigateList />
    </nav>
  );
};
