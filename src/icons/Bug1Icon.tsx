import * as React from "react";
import type { SVGProps } from "react";
const SvgBug1Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bug-1-icon_svg__a)"
    >
      <path d="M9 9V8a3 3 0 1 1 6 0v1M8 9h8a6 6 0 0 1 1 3v3a5 5 0 1 1-10 0v-3a6 6 0 0 1 1-3M3 13h4M17 13h4M12 20v-6M4 19l3.35-2M19.998 19l-3.35-2M4 7l3.75 2.4M20 7l-3.75 2.4" />
    </g>
    <defs>
      <clipPath id="bug-1-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBug1Icon;
