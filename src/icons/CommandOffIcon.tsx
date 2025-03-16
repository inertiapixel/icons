import * as React from "react";
import type { SVGProps } from "react";
const SvgCommandOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#command-off-icon_svg__a)"
    >
      <path d="M18.411 18.417A2 2 0 0 1 15 17v-2H7a2 2 0 1 0 2 2V9H7a2 2 0 0 1-1.417-3.411M15 11V7a2 2 0 1 1 2 2h-4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="command-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCommandOffIcon;
