import * as React from "react";
import type { SVGProps } from "react";
const SvgAtOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#at-off-icon_svg__a)"
    >
      <path d="M9.173 9.17a4 4 0 1 0 5.646 5.668M16 12a4 4 0 0 0-4-4" />
      <path d="M19.694 15.698a2.5 2.5 0 0 0 1.305-2.197V12A9 9 0 0 0 7.944 3.954M5.622 5.637a9 9 0 0 0 9.877 14.644M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="at-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAtOffIcon;
