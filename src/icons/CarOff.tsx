import * as React from "react";
import type { SVGProps } from "react";
const SvgCarOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#car-off_svg__a)"
    >
      <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15.583 15.59a2 2 0 0 0 2.827 2.83" />
      <path d="M5 17H3v-6m0 0 2-5h1m-3 5h8m-1-5h4l4 5m0 0h1a2 2 0 0 1 2 2v4m-3-6h-3m0 6H9m3-9V6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="car-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCarOff;
