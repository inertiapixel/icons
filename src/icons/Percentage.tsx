import * as React from "react";
import type { SVGProps } from "react";
const SvgPercentage = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#percentage_svg__a)"
    >
      <path d="M16 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0M6 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0M6 18 18 6" />
    </g>
    <defs>
      <clipPath id="percentage_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPercentage;
