import * as React from "react";
import type { SVGProps } from "react";
const SvgSkiJumpingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ski-jumping-icon_svg__a)"
    >
      <path d="M11 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M17 17.5 12 13V7l5 4M7 17.5l5-4.5" />
      <path d="M15.102 21.58 21.864 7.08a2 2 0 0 0-.968-2.657M8.898 21.582 2.136 7.079a2 2 0 0 1 .968-2.657M7 11l5-4" />
    </g>
    <defs>
      <clipPath id="ski-jumping-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSkiJumpingIcon;
