import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarMonthIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#calendar-month-icon_svg__a)"
    >
      <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM16 3v4M8 3v4M4 11h16M7 14h.013M10.012 14h.005M13.012 14h.005M16.016 14h.005M13.016 17h.005M7.012 17h.005M10.012 17h.005" />
    </g>
    <defs>
      <clipPath id="calendar-month-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalendarMonthIcon;
