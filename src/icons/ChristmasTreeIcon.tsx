import * as React from "react";
import type { SVGProps } from "react";
const SvgChristmasTreeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#christmas-tree-icon_svg__a)"
    >
      <path d="m12 3 4 4-2 1 4 4-3 1 4 4H5l4-4-3-1 4-4-2-1zM14 17v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3" />
    </g>
    <defs>
      <clipPath id="christmas-tree-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChristmasTreeIcon;
