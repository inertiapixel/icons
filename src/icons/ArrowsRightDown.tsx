import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsRightDown = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-right-down_svg__a)"
    >
      <path d="m3 17 4 4 4-4" />
      <path d="M7 21V10a3 3 0 0 1 3-3h11" />
      <path d="m17 11 4-4-4-4" />
    </g>
    <defs>
      <clipPath id="arrows-right-down_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsRightDown;
