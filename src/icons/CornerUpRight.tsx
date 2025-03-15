import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#corner-up-right_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18v-6a3 3 0 0 1 3-3h10m0 0-4-4m4 4-4 4"
      />
    </g>
    <defs>
      <clipPath id="corner-up-right_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCornerUpRight;
