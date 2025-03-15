import * as React from "react";
import type { SVGProps } from "react";
const SvgChartArea1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-area-1_svg__a)"
    >
      <path d="M4 19h16M4 15l4-6 4 2 4-5 4 4v5z" />
    </g>
    <defs>
      <clipPath id="chart-area-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartArea1;
