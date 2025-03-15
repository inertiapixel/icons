import * as React from "react";
import type { SVGProps } from "react";
const SvgSortAscendingNumbers = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sort-ascending-numbers_svg__a)"
    >
      <path d="m4 15 3 3 3-3M7 6v12M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2M15 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M19 16v3a2 2 0 0 1-2 2h-1.5" />
    </g>
    <defs>
      <clipPath id="sort-ascending-numbers_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSortAscendingNumbers;
