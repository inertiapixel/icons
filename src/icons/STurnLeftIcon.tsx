import * as React from "react";
import type { SVGProps } from "react";
const SvgSTurnLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#s-turn-left-icon_svg__a)"
    >
      <path d="M19 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
      <path d="M17 5H7.5a3.5 3.5 0 1 0 0 7h9a3.5 3.5 0 1 1 0 7H3" />
      <path d="m6 16-3 3 3 3" />
    </g>
    <defs>
      <clipPath id="s-turn-left-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSTurnLeftIcon;
