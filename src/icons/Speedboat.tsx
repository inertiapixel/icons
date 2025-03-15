import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeedboat = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#speedboat_svg__a)"
    >
      <path d="M3 17h13.4a3 3 0 0 0 2.5-1.34L22 11h-6.23a4 4 0 0 0-1.49.29l-3.56 1.42a4 4 0 0 1-1.49.29H4.5zM6 13l1.5-5" />
      <path d="M6 8h8l2 3" />
    </g>
    <defs>
      <clipPath id="speedboat_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpeedboat;
