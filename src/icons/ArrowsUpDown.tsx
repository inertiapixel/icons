import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsUpDown = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-up-down_svg__a)"
    >
      <path d="M7 3v18M10 6 7 3 4 6M20 18l-3 3-3-3M17 21V3" />
    </g>
    <defs>
      <clipPath id="arrows-up-down_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsUpDown;
