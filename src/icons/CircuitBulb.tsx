import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitBulb = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#circuit-bulb_svg__a)"
    >
      <path d="M2 12h5M17 12h5M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0M8.5 8.5l7 7M15.5 8.5l-7 7" />
    </g>
    <defs>
      <clipPath id="circuit-bulb_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircuitBulb;
