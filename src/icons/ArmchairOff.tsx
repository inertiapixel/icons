import * as React from "react";
import type { SVGProps } from "react";
const SvgArmchairOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#armchair-off_svg__a)"
    >
      <path d="M17 13a2 2 0 0 1 4 0v4m-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 4 0v2h8.036" />
      <path d="M5 11V6a3 3 0 0 1 .134-.89m1.987-1.98A3 3 0 0 1 8 3h8a3 3 0 0 1 3 3v5M6 19v2M18 19v2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="armchair-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArmchairOff;
