import * as React from "react";
import type { SVGProps } from "react";
const SvgFriendsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#friends-icon_svg__a)"
    >
      <path d="M5 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 22v-5l-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4l-1 1v5M15 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 22v-4h-2l2-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1l2 6h-2v4" />
    </g>
    <defs>
      <clipPath id="friends-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFriendsIcon;
