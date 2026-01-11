import s from './navLink.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

type PropsNavLink = {
  className?: string;
  href: string;
  children: React.ReactNode;
};

export const NavLink = (props: PropsNavLink) => {
  const { href, children } = props;
  const { className } = props;

  return (
    <Link
      href={href}
      className={clsx(s.navLink, className)}
    >
      {children}
    </Link>
  );
};
