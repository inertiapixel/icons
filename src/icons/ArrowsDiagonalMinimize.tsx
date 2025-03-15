import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsDiagonalMinimize = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-diagonal-minimize_svg__a)"
    >
      <path d="M6 10h4V6M4 4l6 6M18 14h-4v4M14 14l6 6" />
    </g>
    <defs>
      <clipPath id="arrows-diagonal-minimize_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsDiagonalMinimize;
