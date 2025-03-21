import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingCottageIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#building-cottage-icon_svg__a)"
    >
      <path d="M3 21h18M4 21V10l2.5-4.5L12 3l5.5 2.5L20 10v11" />
      <path d="M10 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5" />
    </g>
    <defs>
      <clipPath id="building-cottage-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBuildingCottageIcon;
