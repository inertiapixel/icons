import * as React from "react";
import type { SVGProps } from "react";
const SvgOldIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#old-icon_svg__a)"
    >
      <path d="m11 21-1-4-2-3V8" />
      <path d="m5 14-1-3 4-3 3 2 3 .5M7 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 17l-2 4M16 21v-8.5a1.5 1.5 0 1 1 3 0v.5" />
    </g>
    <defs>
      <clipPath id="old-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOldIcon;
