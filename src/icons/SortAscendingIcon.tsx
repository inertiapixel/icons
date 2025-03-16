import * as React from "react";
import type { SVGProps } from "react";
const SvgSortAscendingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sort-ascending-icon_svg__a)"
    >
      <path d="M4 6h7M4 12h7M4 18h9M15 9l3-3 3 3M18 6v12" />
    </g>
    <defs>
      <clipPath id="sort-ascending-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSortAscendingIcon;
