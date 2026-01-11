import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgFacebook = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={20}
    fill='none'
    viewBox='0 0 10 20'
    ref={ref}
    {...props}
  >
    <path
      fill='#535353'
      fillRule='evenodd'
      d='M9.63 10H6.614v10H2.116V10H0V6.47h2.116V4.168C2.116 2.549 2.963 0 6.614 0h3.333v3.431h-2.38c-.371 0-.953.196-.953.98v2.06H10z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFacebook);
const Memo = memo(ForwardRef);
export default Memo;
