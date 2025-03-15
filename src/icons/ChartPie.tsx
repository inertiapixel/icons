import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPie = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#chart-pie_svg__a)">
      <path d="M9.882 2.208a1.9 1.9 0 0 1 2.087 1.522l.025.167.005.104v7a1 1 0 0 0 .883.993l.117.007h6.8a2 2 0 0 1 2 2 1 1 0 0 1-.026.226A10 10 0 1 1 9.503 2.294l.27-.067.11-.02z" />
      <path d="M14 3.5V9a1 1 0 0 0 1 1h5.5a1 1 0 0 0 .943-1.332 10 10 0 0 0-6.11-6.11A1 1 0 0 0 14 3.5" />
    </g>
    <defs>
      <clipPath id="chart-pie_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartPie;
