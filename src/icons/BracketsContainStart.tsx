import * as React from "react";
import type { SVGProps } from "react";
const SvgBracketsContainStart = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brackets-contain-start_svg__a)"
    >
      <path d="M9 4H5v16h4M17.998 16h-.01M13.998 16h-.01M9.998 16h-.01" />
    </g>
    <defs>
      <clipPath id="brackets-contain-start_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBracketsContainStart;
