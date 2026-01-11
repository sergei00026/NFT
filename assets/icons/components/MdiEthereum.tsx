import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgMdiEthereum = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={22}
    height={22}
    fill='none'
    viewBox='0 0 22 22'
    ref={ref}
    {...props}
  >
    <path
      fill='#141416'
      d='M11.001 1.604 5.272 11.23l5.73 3.438 5.728-3.437zM5.272 12.375l5.73 8.021 5.728-8.02-5.729 3.437z'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMdiEthereum);
const Memo = memo(ForwardRef);
export default Memo;
