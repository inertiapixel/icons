import * as React from "react";
import type { SVGProps } from "react";
const SvgChartCirclesIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-circles-icon_svg__a)"
    >
      <path d="M4 9.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0" />
      <path d="M9 14.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0" />
    </g>
    <defs>
      <clipPath id="chart-circles-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartCirclesIcon;
