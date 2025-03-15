import * as React from "react";
import type { SVGProps } from "react";
const SvgBone1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bone-1_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 3a3 3 0 0 1 3 3 3 3 0 1 1-2.12 5.122L11.12 15.88a3 3 0 1 1-5.117 2.297V18h-.176a3 3 0 1 1 2.298-5.115l4.758-4.758a3 3 0 0 1 2.12-5.122z"
      />
    </g>
    <defs>
      <clipPath id="bone-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBone1;
