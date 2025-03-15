import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-horizontal_svg__a)"
    >
      <path d="m7 8-4 4 4 4M17 8l4 4-4 4M3 12h18" />
    </g>
    <defs>
      <clipPath id="arrows-horizontal_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsHorizontal;
