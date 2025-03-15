import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightSquare = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-right-square_svg__a)"
    >
      <path d="M7 12h14M18 15l3-3-3-3M3 10h4v4H3z" />
    </g>
    <defs>
      <clipPath id="arrow-right-square_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowRightSquare;
