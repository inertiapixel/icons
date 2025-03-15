import * as React from "react";
import type { SVGProps } from "react";
const SvgArmchair2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#armchair-2_svg__a)"
    >
      <path d="M5 10V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" />
      <path d="M16 15v-2a3 3 0 1 1 3 3v3H5v-3a3 3 0 1 1 3-3v2M8 12h8M7 19v2M17 19v2" />
    </g>
    <defs>
      <clipPath id="armchair-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArmchair2;
