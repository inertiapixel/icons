import * as React from "react";
import type { SVGProps } from "react";
const SvgChartRadarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-radar-icon_svg__a)"
    >
      <path d="m12 3 9.5 7L18 21H6L2.5 10z" />
      <path d="m12 7.5 5.5 4L15 17H8.5l-2-5.5z" />
      <path d="m2.5 10 9.5 3 9.5-3" />
      <path d="M12 3v10l6 8M6 21l6-8" />
    </g>
    <defs>
      <clipPath id="chart-radar-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartRadarIcon;
