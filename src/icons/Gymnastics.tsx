import * as React from "react";
import type { SVGProps } from "react";
const SvgGymnastics = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gymnastics_svg__a)"
    >
      <path d="M7 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0M13 21l1-9 7-6M3 11h6l5 1M11.5 8.5 16 5" />
    </g>
    <defs>
      <clipPath id="gymnastics_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGymnastics;
