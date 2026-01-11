import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgLinkedin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    viewBox='0 0 20 20'
    ref={ref}
    {...props}
  >
    <path
      fill='#535353'
      fillRule='evenodd'
      d='M20 12.26V20h-4.313v-7.232c0-1.808-.593-3.05-2.156-3.05-1.186 0-1.887.847-2.21 1.638-.108.282-.162.678-.162 1.073V20H6.847s.054-12.26 0-13.503h4.312v1.921s0 .057-.054.057h.054v-.057c.593-.904 1.563-2.26 3.881-2.26 2.804 0 4.96 1.978 4.96 6.102M2.426 0C.97 0 0 1.017 0 2.316c0 1.3.916 2.317 2.372 2.317h.054c1.51 0 2.426-1.017 2.426-2.317C4.798 1.017 3.882 0 2.426 0M.216 20h4.259V6.497H.216z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLinkedin);
const Memo = memo(ForwardRef);
export default Memo;
