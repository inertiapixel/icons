import * as React from "react";
import type { SVGProps } from "react";
const SvgStethoscopeOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#stethoscope-off-icon_svg__a)"
    >
      <path d="M4.172 4.179A2 2 0 0 0 3 6v3.5a5.5 5.5 0 0 0 9.856 3.358M14 10V6a2 2 0 0 0-2-2h-1" />
      <path d="M8 15a6 6 0 0 0 10.714 3.712m1.216-2.798q.07-.45.07-.914v-3M11 3v2" />
      <path d="M18 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="stethoscope-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStethoscopeOffIcon;
