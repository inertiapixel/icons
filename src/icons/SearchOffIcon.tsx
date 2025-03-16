import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#search-off-icon_svg__a)"
    >
      <path d="M5.038 5.062a7 7 0 1 0 9.91 9.89m1.584-2.434A6.999 6.999 0 0 0 7.494 3.46M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="search-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSearchOffIcon;
