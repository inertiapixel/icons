import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPieOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-pie-off_svg__a)"
    >
      <path d="M5.63 5.644A9 9 0 1 0 18.37 18.36m1.674-2.29c.335-.656.588-1.35.754-2.068a1 1 0 0 0-1-1H17m-4 0a2 2 0 0 1-2-2m0-4v-3a.9.9 0 0 0-1-.8 9 9 0 0 0-2.057.75M15 3.5A9 9 0 0 1 20.5 9H16a1 1 0 0 1-1-1zM3 3l18 18" />
    </g>
    <defs>
      <clipPath id="chart-pie-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartPieOff;
