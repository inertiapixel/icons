import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarStatsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#calendar-stats-icon_svg__a)"
    >
      <path d="M11.795 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M18 14v4h4" />
      <path d="M14 18a4 4 0 1 0 8 0 4 4 0 0 0-8 0M15 3v4M7 3v4M3 11h16" />
    </g>
    <defs>
      <clipPath id="calendar-stats-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalendarStatsIcon;
