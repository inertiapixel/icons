import * as React from "react";
import type { SVGProps } from "react";
const SvgIdBadgeOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#id-badge-off_svg__a)"
    >
      <path d="M7.141 3.125A3 3 0 0 1 8 3h8a3 3 0 0 1 3 3v9m-.13 3.874A3 3 0 0 1 16 21H8a3 3 0 0 1-3-3V6a3 3 0 0 1 .128-.869" />
      <path d="M11.178 11.176a2 2 0 1 0 2.635 2.667M10 6h4M9 18h6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="id-badge-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIdBadgeOff;
