import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#calendar-search-icon_svg__a)"
    >
      <path d="M11.5 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5M16 3v4M8 3v4M4 11h16" />
      <path d="M15 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0M20.2 20.2 22 22" />
    </g>
    <defs>
      <clipPath id="calendar-search-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalendarSearchIcon;
