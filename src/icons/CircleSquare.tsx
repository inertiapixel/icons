import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleSquare = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#circle-square_svg__a)"
    >
      <path d="M3 9.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0" />
      <path d="M10 12a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2z" />
    </g>
    <defs>
      <clipPath id="circle-square_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircleSquare;
