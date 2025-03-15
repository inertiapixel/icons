import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowForwardUpDouble = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-forward-up-double_svg__a)"
    >
      <path d="m11 14 4-4-4-4M16 14l4-4-4-4" />
      <path d="M15 10H8a4 4 0 1 0 0 8h1" />
    </g>
    <defs>
      <clipPath id="arrow-forward-up-double_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowForwardUpDouble;
