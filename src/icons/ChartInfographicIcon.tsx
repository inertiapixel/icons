import * as React from "react";
import type { SVGProps } from "react";
const SvgChartInfographicIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-infographic-icon_svg__a)"
    >
      <path d="M3 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
      <path d="M7 3v4h4M9 17v4M17 14v7M13 13v8M21 12v9" />
    </g>
    <defs>
      <clipPath id="chart-infographic-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartInfographicIcon;
