import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerRightUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#corner-right-up_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18h6a3 3 0 0 0 3-3V5m0 0-4 4m4-4 4 4"
      />
    </g>
    <defs>
      <clipPath id="corner-right-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCornerRightUp;
