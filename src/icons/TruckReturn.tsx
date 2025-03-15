import * as React from "react";
import type { SVGProps } from "react";
const SvgTruckReturn = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#truck-return_svg__a)"
    >
      <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M5 17H3V6a1 1 0 0 1 1-1h9v6H8m0 0 2 2m-2-2 2-2M9 17h6M13 6h5l3 5v6h-2" />
    </g>
    <defs>
      <clipPath id="truck-return_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTruckReturn;
