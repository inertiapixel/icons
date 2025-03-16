import * as React from "react";
import type { SVGProps } from "react";
const SvgStethoscopeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#stethoscope-icon_svg__a)"
    >
      <path d="M6 4H5a2 2 0 0 0-2 2v3.5a5.5 5.5 0 0 0 11 0V6a2 2 0 0 0-2-2h-1" />
      <path d="M8 15a6 6 0 0 0 12 0v-3M11 3v2M6 3v2" />
      <path d="M18 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    </g>
    <defs>
      <clipPath id="stethoscope-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStethoscopeIcon;
