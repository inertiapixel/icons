import * as React from "react";
import type { SVGProps } from "react";
const SvgPolygonOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#polygon-off_svg__a)"
    >
      <path d="M10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0M13 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6.5 9.499l1.546-1.312M14 5.5 17 7M18.5 10l-1.185 3.318m-1.062 2.972L16 17M13.5 17.5l-7-5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="polygon-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPolygonOff;
