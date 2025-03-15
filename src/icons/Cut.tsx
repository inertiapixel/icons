import * as React from "react";
import type { SVGProps } from "react";
const SvgCut = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cut_svg__a)"
    >
      <path d="M4 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M14 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M9.148 14.85 17.998 4M6 4l8.85 10.85" />
    </g>
    <defs>
      <clipPath id="cut_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCut;
