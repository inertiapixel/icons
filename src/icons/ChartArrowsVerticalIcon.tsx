import * as React from "react";
import type { SVGProps } from "react";
const SvgChartArrowsVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-arrows-vertical-icon_svg__a)"
    >
      <path d="M18 21V7M9 15l3-3 3 3M15 10l3-3 3 3M3 21h18M12 21v-9M3 6l3-3 3 3M6 21V3" />
    </g>
    <defs>
      <clipPath id="chart-arrows-vertical-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartArrowsVerticalIcon;
