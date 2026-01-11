import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgFirstpagearrow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={131}
    height={136}
    fill='none'
    viewBox='0 0 131 136'
    ref={ref}
    {...props}
  >
    <path
      stroke='currentcolor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={1.5}
      strokeWidth={3.379}
      d='M15.65 43.295c16.784-12.57 36.325-20.284 57.033-14.666 18.692 5.071 30.46 21.002 17.857 40.703-5.966 9.327-18.67 15.855-28.655 10.542-11.124-5.919-2.356-20.857 4.766-25.165 16.633-10.062 40.046-5.385 51.561 14.159 13.637 23.144-9.426 34.664-9.442 34.476'
    />
    <path
      stroke='currentcolor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={1.5}
      strokeWidth={3.379}
      d='M19.268 18.382c.61 2.425.257 4.852.018 7.295-.786 8.024-3.931 16.354-9.575 21.616 7.427-3.256 18.08-4.674 24.826 1.042'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFirstpagearrow);
const Memo = memo(ForwardRef);
export default Memo;
