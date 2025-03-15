import * as React from "react";
import type { SVGProps } from "react";
const SvgFiretruck = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#firetruck_svg__a)"
    >
      <path d="M3 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 18h8m4 0h2v-6m0 0a5 5 0 0 0-5-5h-1l1.5 5zM12 18V7h3" />
      <path d="M3 17v-5h9M3 9l18-6M6 12V8" />
    </g>
    <defs>
      <clipPath id="firetruck_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFiretruck;
