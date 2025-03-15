import * as React from "react";
import type { SVGProps } from "react";
const SvgPills = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pills_svg__a)"
    >
      <path d="M3 8a5 5 0 1 0 10 0A5 5 0 0 0 3 8M13 17a4 4 0 1 0 8 0 4 4 0 0 0-8 0M4.5 4.5l7 7M19.5 14.5l-5 5" />
    </g>
    <defs>
      <clipPath id="pills_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPills;
