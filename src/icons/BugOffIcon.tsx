import * as React from "react";
import type { SVGProps } from "react";
const SvgBugOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bug-off-icon_svg__a)"
    >
      <path d="M9.883 5.873A3 3 0 0 1 14.999 8v1M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705A5 5 0 0 1 7 15v-3a6 6 0 0 1 1-3h1M3 13h4M17 13h4M12 20v-6M4 19l3.35-2M4 7l3.75 2.4M20 7l-3.75 2.4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="bug-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBugOffIcon;
