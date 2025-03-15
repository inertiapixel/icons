import * as React from "react";
import type { SVGProps } from "react";
const SvgTruckDelivery = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#truck-delivery_svg__a)"
    >
      <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M5 17H3v-4M2 5h11v12m-4 0h6m4 0h2v-6m0 0h-8m8 0-3-5h-5M3 9h4" />
    </g>
    <defs>
      <clipPath id="truck-delivery_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTruckDelivery;
