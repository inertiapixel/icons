import * as React from "react";
import type { SVGProps } from "react";
const SvgNumber2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#number-2_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 8a4 4 0 0 1 8 0c0 1.098-.564 2.025-1.159 2.815L8 20h8"
      />
    </g>
    <defs>
      <clipPath id="number-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNumber2;
