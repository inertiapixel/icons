import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCircleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#user-circle-icon_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M9 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855" />
    </g>
    <defs>
      <clipPath id="user-circle-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserCircleIcon;
