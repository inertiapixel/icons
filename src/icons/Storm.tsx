import * as React from "react";
import type { SVGProps } from "react";
const SvgStorm = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#storm_svg__a)"
    >
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M5 12a7 7 0 1 0 14 0 7 7 0 0 0-14 0" />
      <path d="M5.37 14.236C3.53 10.307 3.807 6.62 4.664 3M18.629 9.762c1.837 3.928 1.56 7.615.703 11.236" />
    </g>
    <defs>
      <clipPath id="storm_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStorm;
