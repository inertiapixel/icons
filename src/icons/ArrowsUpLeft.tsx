import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsUpLeft = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-up-left_svg__a)"
    >
      <path d="m21 7-4-4-4 4" />
      <path d="M17 3v11a3 3 0 0 1-3 3H3" />
      <path d="m7 13-4 4 4 4" />
    </g>
    <defs>
      <clipPath id="arrows-up-left_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsUpLeft;
