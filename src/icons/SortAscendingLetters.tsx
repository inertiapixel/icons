import * as React from "react";
import type { SVGProps } from "react";
const SvgSortAscendingLetters = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sort-ascending-letters_svg__a)"
    >
      <path d="M15 10V5c0-1.38.62-2 2-2s2 .62 2 2v5m0-3h-4M19 21h-4l4-7h-4M4 15l3 3 3-3M7 6v12" />
    </g>
    <defs>
      <clipPath id="sort-ascending-letters_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSortAscendingLetters;
