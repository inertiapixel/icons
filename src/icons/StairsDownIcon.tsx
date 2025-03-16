import * as React from "react";
import type { SVGProps } from "react";
const SvgStairsDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#stairs-down-icon_svg__a)"
    >
      <path d="M22 21h-5v-5h-5v-5H7V6H2M18 3v7M15 7l3 3 3-3" />
    </g>
    <defs>
      <clipPath id="stairs-down-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStairsDownIcon;
