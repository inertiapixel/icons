import * as React from "react";
import type { SVGProps } from "react";
const SvgChartDonut3 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-donut-3_svg__a)"
    >
      <path d="M12 3v5m4 4h5M8.929 14.582 5.5 17.5M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
    </g>
    <defs>
      <clipPath id="chart-donut-3_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartDonut3;
