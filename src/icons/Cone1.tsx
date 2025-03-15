import * as React from "react";
import type { SVGProps } from "react";
const SvgCone1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cone-1_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 17.997v-.5l-8.13-14.99a1 1 0 0 0-1.74 0L3 17.496v.5c0 1.659 4.03 3.003 9 3.003s9-1.344 9-3.002"
      />
    </g>
    <defs>
      <clipPath id="cone-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCone1;
