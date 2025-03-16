import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsRandomIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-random-icon_svg__a)"
    >
      <path d="M20 21h-4v-4M16 21l5-5M6.5 9.504l-3.5-2L5 4M3 7.503l6.83-1.87M4 16l4-1 1 4M8 15l-3.5 6M21 5l-.5 4-4-.5M20.5 9 16 3.5" />
    </g>
    <defs>
      <clipPath id="arrows-random-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsRandomIcon;
