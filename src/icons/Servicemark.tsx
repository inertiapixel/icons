import * as React from "react";
import type { SVGProps } from "react";
const SvgServicemark = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#servicemark_svg__a)"
    >
      <path d="M9 9H6.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 1 1 0 3H5M13 15V9l3 4 3-4v6" />
    </g>
    <defs>
      <clipPath id="servicemark_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgServicemark;
