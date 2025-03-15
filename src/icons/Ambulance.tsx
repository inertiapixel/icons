import * as React from "react";
import type { SVGProps } from "react";
const SvgAmbulance = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ambulance_svg__a)"
    >
      <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M5 17H3V6a1 1 0 0 1 1-1h9v12m-4 0h6m4 0h2v-6m0 0h-8m8 0-3-5h-5M6 10h4M8 8v4" />
    </g>
    <defs>
      <clipPath id="ambulance_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAmbulance;
