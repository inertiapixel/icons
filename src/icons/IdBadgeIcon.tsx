import * as React from "react";
import type { SVGProps } from "react";
const SvgIdBadgeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#id-badge-icon_svg__a)"
    >
      <path d="M5 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" />
      <path d="M10 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0M10 6h4M9 18h6" />
    </g>
    <defs>
      <clipPath id="id-badge-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIdBadgeIcon;
