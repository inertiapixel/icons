import * as React from "react";
import type { SVGProps } from "react";
const SvgBadgeOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#badge-off-icon_svg__a)"
    >
      <path d="M7 7v10l5 3 5-3m0-4V4l-5 3-2.496-1.497M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="badge-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBadgeOffIcon;
