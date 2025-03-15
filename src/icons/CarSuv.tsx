import * as React from "react";
import type { SVGProps } from "react";
const SvgCarSuv = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#car-suv_svg__a)"
    >
      <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M16 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 9l2-4h7.438a2 2 0 0 1 1.94 1.515L17 9h3a2 2 0 0 1 2 2v3M10 9V5M2 7v4" />
      <path d="M22 14.003a5 5 0 0 0-4-2.001 5 5 0 0 0-4 2h-3a5 5 0 0 0-8.004.003" />
      <path d="M5 12V9h13" />
    </g>
    <defs>
      <clipPath id="car-suv_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCarSuv;
