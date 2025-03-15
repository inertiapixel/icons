import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRotaryLeft = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-rotary-left_svg__a)"
    >
      <path d="M16 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6M16 10v10M13 7H3M7 11 3 7l4-4" />
    </g>
    <defs>
      <clipPath id="arrow-rotary-left_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowRotaryLeft;
