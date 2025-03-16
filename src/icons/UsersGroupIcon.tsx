import * as React from "react";
import type { SVGProps } from "react";
const SvgUsersGroupIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#users-group-icon_svg__a)"
    >
      <path d="M10 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0M8 21v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1M15 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 10h2a2 2 0 0 1 2 2v1M5 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 13v-1a2 2 0 0 1 2-2h2" />
    </g>
    <defs>
      <clipPath id="users-group-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUsersGroupIcon;
