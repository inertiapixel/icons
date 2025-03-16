import * as React from "react";
import type { SVGProps } from "react";
const SvgLockSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lock-search-icon_svg__a)"
    >
      <path d="M11.5 21H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10M8 11V7a4 4 0 0 1 8 0v4M15 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0M20.2 20.2 22 22" />
    </g>
    <defs>
      <clipPath id="lock-search-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLockSearchIcon;
