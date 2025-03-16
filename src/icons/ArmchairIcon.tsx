import * as React from "react";
import type { SVGProps } from "react";
const SvgArmchairIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#armchair-icon_svg__a)"
    >
      <path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 0 1 4 0v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2" />
      <path d="M5 11V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5M6 19v2M18 19v2" />
    </g>
    <defs>
      <clipPath id="armchair-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArmchairIcon;
