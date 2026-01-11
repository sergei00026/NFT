import s from './footer.module.scss';
import clsx from 'clsx';
import { footerNavItems } from '@/widgets/footer/ui/model/footerNav.config';
import { PolymorphicButton } from '@/shared/ui/polymorphicButton';
import Link from 'next/link';

type PropsFooter = {
  className?: string;
};

export const FooterNav = (props: PropsFooter) => {
  const { className } = props;

  return (
    <nav className={clsx(s.footerNav, className)}>
      <ul className={s.list}>
        {footerNavItems.map((item) => {
          return (
            <li
              className={s.list}
              key={item.label}
            >
              <PolymorphicButton
                as={Link}
                href={item.href}
                target={'_blank'}
              >
                {item.label}
              </PolymorphicButton>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
