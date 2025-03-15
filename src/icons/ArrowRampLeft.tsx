import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRampLeft = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-ramp-left_svg__a)"
    >
      <path d="M17 3v8.707M13 7l4-4 4 4M7 14l-4-4 4-4" />
      <path d="M17 21A11 11 0 0 0 6 10H3" />
    </g>
    <defs>
      <clipPath id="arrow-ramp-left_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowRampLeft;
