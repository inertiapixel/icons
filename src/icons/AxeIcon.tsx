import * as React from "react";
import type { SVGProps } from "react";
const SvgAxeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#axe-icon_svg__a)"
    >
      <path d="m13 9 7.383 7.418c.823.82.823 2.148 0 2.967a2.11 2.11 0 0 1-2.976 0L10 12" />
      <path d="m6.658 15.66-3.32-3.32a1.25 1.25 0 0 1 .42-2.044L6.998 9l6-6 3 3-6 6-1.296 3.24a1.25 1.25 0 0 1-2.044.42" />
    </g>
    <defs>
      <clipPath id="axe-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAxeIcon;
