import * as React from "react";
import type { SVGProps } from "react";
const SvgPerspective = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#perspective_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m6.141 4.162 12 1.714a1 1 0 0 1 .859.99v10.266a1 1 0 0 1-.859.99l-12 1.714A1 1 0 0 1 5 18.846V5.152a1 1 0 0 1 1.141-.99"
      />
    </g>
    <defs>
      <clipPath id="perspective_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPerspective;
