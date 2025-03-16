import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarBoltIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#calendar-bolt-icon_svg__a)"
    >
      <path d="M13.5 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5M16 3v4M8 3v4M4 11h16M19 16l-2 3h4l-2 3" />
    </g>
    <defs>
      <clipPath id="calendar-bolt-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalendarBoltIcon;
