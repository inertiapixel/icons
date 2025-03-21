import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarUserIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#calendar-user-icon_svg__a)"
    >
      <path d="M12 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5M16 3v4M8 3v4M4 11h16M17 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M22 22a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2" />
    </g>
    <defs>
      <clipPath id="calendar-user-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalendarUserIcon;
