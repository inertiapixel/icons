import * as React from "react";
import type { SVGProps } from "react";
const SvgSTurnDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#s-turn-down-icon_svg__a)"
    >
      <path d="M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path d="M5 7v9.5a3.5 3.5 0 1 0 7 0v-9a3.5 3.5 0 1 1 7 0V21" />
      <path d="m16 18 3 3 3-3" />
    </g>
    <defs>
      <clipPath id="s-turn-down-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSTurnDownIcon;
