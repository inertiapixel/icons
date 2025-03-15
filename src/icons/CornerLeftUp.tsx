import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerLeftUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#corner-left-up_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 18h-6a3 3 0 0 1-3-3V5m0 0L5 9m4-4 4 4"
      />
    </g>
    <defs>
      <clipPath id="corner-left-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCornerLeftUp;
