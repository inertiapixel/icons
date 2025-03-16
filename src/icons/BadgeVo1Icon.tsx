import * as React from "react";
import type { SVGProps } from "react";
const SvgBadgeVo1Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#badge-vo-1-icon_svg__a)"
    >
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="m7 9 2 6 2-6M15.5 9a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 1 1-3 0v-3A1.5 1.5 0 0 1 15.5 9" />
    </g>
    <defs>
      <clipPath id="badge-vo-1-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBadgeVo1Icon;
