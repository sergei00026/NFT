export type NavItem = {
  label: string;
  href: string;
};

export const navigationItems: NavItem[] = [
  { label: 'Discover', href: '/' },
  { label: 'Creators', href: '/creators' },
  { label: 'Sell', href: '/sell' },
  { label: 'Stats', href: '/stats' },
];
