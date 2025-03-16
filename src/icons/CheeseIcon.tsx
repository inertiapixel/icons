import * as React from "react";
import type { SVGProps } from "react";
const SvgCheeseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cheese-icon_svg__a)"
    >
      <path d="M4.518 20.008 21 20v-3.5a2 2 0 0 1 0-4V9H4.277" />
      <path d="m21 9-9.385-4.992c-2.512.12-4.758 1.42-6.327 3.425C3.865 9.253 3 11.653 3 14.287c0 2.117.56 4.085 1.519 5.72M15 13v.01M8 13v.01M11 16v.01" />
    </g>
    <defs>
      <clipPath id="cheese-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCheeseIcon;
