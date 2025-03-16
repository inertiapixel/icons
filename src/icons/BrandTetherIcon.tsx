import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandTetherIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#brand-tether-icon_svg__a)"
    >
      <path d="M14.079 20.188c-1.15 1.083-3.02 1.083-4.17 0l-6.93-6.548c-.96-.906-1.27-2.624-.69-3.831l2.4-5.018C5.158 3.8 6.408 3 7.468 3h9.06c1.06 0 2.31.802 2.78 1.79l2.4 5.019c.58 1.207.26 2.925-.69 3.83-3.453 3.293-3.466 3.279-6.94 6.549M12 15V8M8 8h8" />
    </g>
    <defs>
      <clipPath id="brand-tether-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandTetherIcon;
