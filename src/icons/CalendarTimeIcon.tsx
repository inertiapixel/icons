import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarTimeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#calendar-time-icon_svg__a)"
    >
      <path d="M11.795 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
      <path d="M14 18a4 4 0 1 0 8 0 4 4 0 0 0-8 0M15 3v4M7 3v4M3 11h16" />
      <path d="M18 16.496V18l1 1" />
    </g>
    <defs>
      <clipPath id="calendar-time-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalendarTimeIcon;
