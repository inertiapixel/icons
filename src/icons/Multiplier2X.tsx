import * as React from "react";
import type { SVGProps } from "react";
const SvgMultiplier2X = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#multiplier-2x_svg__a)"
    >
      <path d="m14 16 4-4M18 16l-4-4M6 10a2 2 0 1 1 4 0c0 .591-.417 1.318-.816 1.858L6 16.001h4" />
    </g>
    <defs>
      <clipPath id="multiplier-2x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMultiplier2X;
