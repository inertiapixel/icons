import * as React from "react";
import type { SVGProps } from "react";
const SvgPrayIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pray-icon_svg__a)"
    >
      <path d="M11 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 20h8l-4-4V9l4 3 2-2" />
    </g>
    <defs>
      <clipPath id="pray-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPrayIcon;
