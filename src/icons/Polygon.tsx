import * as React from "react";
import type { SVGProps } from "react";
const SvgPolygon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#polygon_svg__a)"
    >
      <path d="M10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0M13 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6.5 9.5l3.5-3M14 5.5 17 7M18.5 10 16 17M13.5 17.5l-7-5" />
    </g>
    <defs>
      <clipPath id="polygon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPolygon;
