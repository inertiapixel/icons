import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarSmile = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#calendar-smile_svg__a)"
    >
      <path d="M16 3v4M8 3v4m-4 4h16m-9.995 3h.01m3.99 0h.01M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M10.004 17a3.5 3.5 0 0 0 4 0" />
    </g>
    <defs>
      <clipPath id="calendar-smile_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalendarSmile;
