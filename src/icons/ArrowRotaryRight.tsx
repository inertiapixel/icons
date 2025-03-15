import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRotaryRight = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-rotary-right_svg__a)"
    >
      <path d="M5 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0M8 10v10M17 11l4-4-4-4M11 7h10" />
    </g>
    <defs>
      <clipPath id="arrow-rotary-right_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowRotaryRight;
