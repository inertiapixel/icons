import * as React from "react";
import type { SVGProps } from "react";
const SvgMathMaxMin = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#math-max-min_svg__a)"
    >
      <path d="M15 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M3 13.999s.605-5.44 2.284-7.862m3.395.026c2.137 2.652 4.547 9.113 6.68 11.719M18.746 18.038q1.052-1.32 2.252-8.038" />
    </g>
    <defs>
      <clipPath id="math-max-min_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMathMaxMin;
