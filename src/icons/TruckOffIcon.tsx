import * as React from "react";
import type { SVGProps } from "react";
const SvgTruckOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#truck-off-icon_svg__a)"
    >
      <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15.583 15.586a2.001 2.001 0 0 0 2.826 2.83" />
      <path d="M5 17H3V6a1 1 0 0 1 1-1h1m3.96 0H13v4m0 4v4m-4 0h6m6 0v-6m0 0h-6m6 0-3-5h-5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="truck-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTruckOffIcon;
