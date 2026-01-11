import s from './socialLinks.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { socialLinks } from './social.config';
import { PolymorphicButton } from '@/shared/ui/polymorphicButton';

type Props = {
  className?: string;
  onItemClick?: () => void;
};

export const SocialLinks = ({ className, onItemClick }: Props) => {
  return (
    <ul className={clsx(s.list, className)}>
      {socialLinks.map(({ id, label, href, icon: Icon }) => (
        <li key={id}>
          <PolymorphicButton
            as={Link}
            variant='text'
            href={href}
            target='_blank'
            aria-label={label}
            onClick={onItemClick}
          >
            <Icon />
          </PolymorphicButton>
        </li>
      ))}
    </ul>
  );
};
