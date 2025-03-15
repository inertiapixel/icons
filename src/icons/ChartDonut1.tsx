import * as React from "react";
import type { SVGProps } from "react";
const SvgChartDonut1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-donut-1_svg__a)"
    >
      <path d="M9.999 3.201a9 9 0 1 0 10.8 10.8 1 1 0 0 0-1-1h-3.8a4.1 4.1 0 1 1-5-5v-4a.9.9 0 0 0-1-.8" />
      <path d="M15 3.5A9 9 0 0 1 20.5 9H16a9 9 0 0 0-1-1z" />
    </g>
    <defs>
      <clipPath id="chart-donut-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartDonut1;
