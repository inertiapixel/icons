import * as React from "react";
import type { SVGProps } from "react";
const SvgInfinityOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#infinity-off-icon_svg__a)"
    >
      <path d="M8.166 8.176a4 4 0 1 0 1.663 6.654 10 10 0 0 0 2.172-2.828 10 10 0 0 0 2.172 2.828 4 4 0 0 0 1.608.98m-2.103-6.155q.24-.25.495-.481a4 4 0 1 1 5.129 6.1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="infinity-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInfinityOffIcon;
