import { navigationItems } from './navigation.config';
import { PolymorphicButton } from '@/shared/ui/polymorphicButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './navigate.module.scss';

type Props = {
  onItemClick?: () => void;
};

export const NavigateList = ({ onItemClick }: Props) => {
  const pathname = usePathname();

  return (
    <ul className={s.list}>
      {navigationItems.map((item) => (
        <li key={item.href}>
          <PolymorphicButton
            href={item.href}
            as={Link}
            variant='text'
            isActive={item.href === pathname}
            onClick={onItemClick}
            className={s.btn}
          >
            {item.label}
          </PolymorphicButton>
        </li>
      ))}
    </ul>
  );
};
