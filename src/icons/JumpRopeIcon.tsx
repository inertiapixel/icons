import * as React from "react";
import type { SVGProps } from "react";
const SvgJumpRopeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#jump-rope-icon_svg__a)"
    >
      <path d="M6 14V8a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6" />
      <path d="M16 5a2 2 0 1 1 4 0v3a2 2 0 1 1-4 0zM4 16a2 2 0 0 1 4 0v3a2 2 0 0 1-4 0z" />
    </g>
    <defs>
      <clipPath id="jump-rope-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgJumpRopeIcon;
