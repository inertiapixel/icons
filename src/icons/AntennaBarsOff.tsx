import * as React from "react";
import type { SVGProps } from "react";
const SvgAntennaBarsOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#antenna-bars-off_svg__a)"
    >
      <path d="M6 18v-3M10 18v-6M14 18v-4M14 10V9M18 14V6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="antenna-bars-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAntennaBarsOff;
