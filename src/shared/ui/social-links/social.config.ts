import Inst from '../../../../assets/icons/components/Inst';
import Linkedin from '../../../../assets/icons/components/Linkedin';
import Facebook from '../../../../assets/icons/components/Facebook';
import Twitter from '../../../../assets/icons/components/Twitter';
import type { ComponentType, SVGProps } from 'react';

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type SocialItem = {
  id: string;
  href: string;
  label: string;
  icon: IconComponent;
};

export const socialLinks: SocialItem[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: Inst,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: Facebook,
  },
  {
    id: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: Twitter,
  },
];
