import * as React from "react";
import type { SVGProps } from "react";
const SvgDoorEnterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#door-enter-icon_svg__a)"
    >
      <path d="M13 12v.01M3 21h18M5 21V5a2 2 0 0 1 2-2h6m4 10.5V21M21 7h-7m0 0 3-3m-3 3 3 3" />
    </g>
    <defs>
      <clipPath id="door-enter-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDoorEnterIcon;
