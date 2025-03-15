import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRampRight3 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-ramp-right-3_svg__a)"
    >
      <path d="M6 3v6M16 16l4-4-4-4" />
      <path d="M6 21v-6a3 3 0 0 1 3-3h11" />
    </g>
    <defs>
      <clipPath id="arrow-ramp-right-3_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowRampRight3;
