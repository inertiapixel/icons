import * as React from "react";
import type { SVGProps } from "react";
const SvgMathMax = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#math-max_svg__a)"
    >
      <path d="M5 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M3 15s.616-5.544 2.332-7.93M8.637 7.113c2.717 3.313 5.882 12.888 8.363 12.888q3 0 4-9" />
    </g>
    <defs>
      <clipPath id="math-max_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMathMax;
