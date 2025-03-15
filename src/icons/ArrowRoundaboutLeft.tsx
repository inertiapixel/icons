import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRoundaboutLeft = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-roundabout-left_svg__a)"
    >
      <path d="M3 9h8a5 5 0 1 1 5 5v7" />
      <path d="M7 5 3 9l4 4" />
    </g>
    <defs>
      <clipPath id="arrow-roundabout-left_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowRoundaboutLeft;
