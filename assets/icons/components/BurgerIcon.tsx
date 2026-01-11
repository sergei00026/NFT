import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgBurgerIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={34}
    height={25}
    fill='none'
    viewBox='0 0 34 25'
    ref={ref}
    {...props}
  >
    <path
      fill='#918F8F'
      d='M1 1h31.5z'
    />
    <path
      stroke='#282828'
      strokeLinecap='round'
      strokeWidth={2}
      d='M1 1h31.5'
    />
    <path
      fill='#918F8F'
      d='M1 12.163h31.5z'
    />
    <path
      stroke='#282828'
      strokeLinecap='round'
      strokeWidth={2}
      d='M1 12.163h31.5'
    />
    <path
      fill='#918F8F'
      d='M1 23.326h31.5z'
    />
    <path
      stroke='#282828'
      strokeLinecap='round'
      strokeWidth={2}
      d='M1 23.326h31.5'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBurgerIcon);
const Memo = memo(ForwardRef);
export default Memo;
