import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={9}
    fill='none'
    viewBox='0 0 14 9'
    ref={ref}
    {...props}
  >
    <path
      fill='currentcolor'
      fillRule='evenodd'
      d='M4.91.265a1 1 0 0 0-1.414.057l-3.23 3.5a1 1 0 0 0 0 1.356l3.23 3.5a1 1 0 1 0 1.47-1.356L3.284 5.5H13a1 1 0 1 0 0-2H3.284l1.682-1.822A1 1 0 0 0 4.909.265'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLeft);
const Memo = memo(ForwardRef);
export default Memo;
