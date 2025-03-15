import * as React from "react";
import type { SVGProps } from "react";
const SvgTriangle1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#triangle-1_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.363 3.591 2.256 17.125a1.914 1.914 0 0 0 1.637 2.871h16.214a1.915 1.915 0 0 0 1.636-2.87L13.637 3.59a1.913 1.913 0 0 0-3.274 0z"
      />
    </g>
    <defs>
      <clipPath id="triangle-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTriangle1;
