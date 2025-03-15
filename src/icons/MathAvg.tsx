import * as React from "react";
import type { SVGProps } from "react";
const SvgMathAvg = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#math-avg_svg__a)"
    >
      <path d="M3 21 21 3M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0" />
    </g>
    <defs>
      <clipPath id="math-avg_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMathAvg;
