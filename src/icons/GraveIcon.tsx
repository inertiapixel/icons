import * as React from "react";
import type { SVGProps } from "react";
const SvgGraveIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#grave-icon_svg__a)"
    >
      <path d="M5 21v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2zM10 16v-5H6V7h4V3h4v4h4v4h-4v5" />
    </g>
    <defs>
      <clipPath id="grave-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGraveIcon;
