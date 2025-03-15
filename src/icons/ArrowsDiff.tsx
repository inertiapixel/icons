import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsDiff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-diff_svg__a)"
    >
      <path d="M11 16h10M11 16l4 4M11 16l4-4M13 8H3M13 8l-4 4M13 8 9 4" />
    </g>
    <defs>
      <clipPath id="arrows-diff_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsDiff;
