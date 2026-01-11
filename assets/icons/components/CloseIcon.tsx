import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgCloseIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    viewBox='0 0 24 24'
    ref={ref}
    {...props}
  >
    <path
      stroke='currentcolor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M21 3 3 21M3 3l18 18'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCloseIcon);
const Memo = memo(ForwardRef);
export default Memo;
