import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsSortIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-sort-icon_svg__a)"
    >
      <path d="m3 9 4-4m0 0 4 4M7 5v14M21 15l-4 4m0 0-4-4m4 4V5" />
    </g>
    <defs>
      <clipPath id="arrows-sort-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsSortIcon;
