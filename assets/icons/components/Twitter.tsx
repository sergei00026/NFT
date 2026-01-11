import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgTwitter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={18}
    fill='none'
    viewBox='0 0 20 18'
    ref={ref}
    {...props}
  >
    <path
      fill='currentcolor'
      fillRule='evenodd'
      d='M20 2.133c-.753.364-1.506.624-2.353.728A4.43 4.43 0 0 0 19.435.364c-.8.52-1.694.885-2.588 1.093C16.094.572 15.012 0 13.835 0c-2.259 0-4.094 2.029-4.094 4.526 0 .364.047.728.094 1.04C6.4 5.358 3.388 3.59 1.365.832.988 1.51.8 2.29.8 3.122c0 1.56.706 2.965 1.835 3.797a3.5 3.5 0 0 1-1.882-.572v.052c0 2.185 1.412 4.058 3.294 4.474a3.7 3.7 0 0 1-1.082.156c-.283 0-.518-.052-.753-.104.517 1.82 2.023 3.121 3.859 3.173-1.412 1.197-3.153 1.925-5.083 1.925-.33 0-.659 0-.988-.052C1.835 17.271 3.953 18 6.306 18c7.576 0 11.67-6.92 11.67-12.902v-.572A9.4 9.4 0 0 0 20 2.133'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTwitter);
const Memo = memo(ForwardRef);
export default Memo;
